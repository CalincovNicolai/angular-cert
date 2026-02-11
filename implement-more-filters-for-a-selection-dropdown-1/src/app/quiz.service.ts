import { Injectable } from '@angular/core';
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
  ): Observable<Question[]> {
    return this.http
      .get<{
        results: ApiQuestion[];
      }>(
        `${this.API_URL}/api.php?amount=5&category=${categoryId}&difficulty=${difficulty.toLowerCase()}&type=multiple`,
      )
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
