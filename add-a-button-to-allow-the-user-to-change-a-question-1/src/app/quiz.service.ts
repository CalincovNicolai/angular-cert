import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import {
  Category,
  Difficulty,
  ApiQuestion,
  Question,
  Results,
  SubCategory,
} from './data.models';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private API_URL = 'https://opentdb.com/';
  private latestResults!: Results;
  private currentQuestions = signal<Question[]>([]);
  private canSwitch = signal(true);
  readonly canSwitchQuestion = this.canSwitch.asReadonly();
  private catId = signal<string>('');
  private difficulty = signal<Difficulty>('Easy');

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.http
      .get<{ trivia_categories: Category[] }>(this.API_URL + 'api_category.php')
      .pipe(
        map((res) => res.trivia_categories),
        map((categories) => this.populateSubCategories(categories)),
      );
  }

  createQuiz(
    categoryId: string | number,
    difficulty: Difficulty,
  ): Signal<Question[]> {
    this.catId.set(categoryId.toString());
    this.difficulty.set(difficulty);
    this.getQuestions(5)
      .pipe(tap((questions) => this.currentQuestions.set(questions)))
      .subscribe();
    this.canSwitch.set(true);
    return this.currentQuestions.asReadonly();
  }

  switchQuestion(question: Question): Signal<Question[]> {
    this.getQuestions(1).subscribe((newQuestions) => {
      let index = this.currentQuestions().findIndex(
        (q) => q.question === question.question,
      );
      if (index > -1) {
        this.currentQuestions.update((questions) => {
          questions.splice(index, 1, newQuestions[0]);
          return [...questions];
        });
      }
    });
    this.canSwitch.set(false);
    return this.currentQuestions.asReadonly();
  }

  private getQuestions(count = 5): Observable<Question[]> {
    return this.http
      .get<{
        results: ApiQuestion[];
      }>(`${this.API_URL}/api.php?amount=${count}&category=${this.catId()}&difficulty=${this.difficulty().toLowerCase()}&type=multiple`)
      .pipe(
        map((res) => {
          const quiz: Question[] = res.results.map((q) => ({
            ...q,
            all_answers: [...q.incorrect_answers, q.correct_answer].sort(() =>
              Math.random() > 0.5 ? 1 : -1,
            ),
          }));
          return quiz;
        }),
      );
  }

  computeScore(questions: Question[], answers: string[]): void {
    let score = 0;
    questions.forEach((q, index) => {
      if (q.correct_answer == answers[index]) score++;
    });
    this.latestResults = { questions, answers, score };
  }

  getLatestResults(): Results {
    return this.latestResults;
  }

  private populateSubCategories(categories: Category[]): Category[] {
    const categoriesWithSubCategories: Category[] = [];
    const catsWithSubCatsMap = new Map<string, SubCategory[]>();
    const catsWithSubCats = new Set<string>();
    // First, we go through all categories and find the ones with sub-categories
    categories.forEach((category) => {
      category.subCategories = [];
      let split = category.name.split(':');
      if (split.length > 1) {
        const categoryName = split[0].trim();
        const subCategoriesForCategory =
          catsWithSubCatsMap.get(categoryName) ?? [];
        subCategoriesForCategory.push({
          id: category.id,
          name: split[1].trim(),
        });
        catsWithSubCatsMap.set(categoryName, subCategoriesForCategory);
        catsWithSubCats.add(split[0].trim());
      }
    });
    // Then we remove all main categories that have sub-categories
    const basicCategories = categories.filter((cat) => !cat.name.includes(':'));
    // We create a new array of categories with sub-categories
    catsWithSubCatsMap.forEach((subCategoriesForCategory, catName) => {
      categoriesWithSubCategories.push({
        id: 0,
        name: catName,
        subCategories: subCategoriesForCategory,
      });
    });
    return [...categoriesWithSubCategories, ...basicCategories];
  }
}
