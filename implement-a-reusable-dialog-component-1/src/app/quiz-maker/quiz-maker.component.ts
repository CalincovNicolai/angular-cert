import {Component, ElementRef, inject, viewChild} from '@angular/core';
import {Category, Difficulty, Question, SubCategory} from '../data.models';
import {Observable, tap} from 'rxjs';
import {QuizService} from '../quiz.service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { QuizComponent } from '../quiz/quiz.component';

@Component({
    selector: 'app-quiz-maker',
    templateUrl: './quiz-maker.component.html',
    styleUrls: ['./quiz-maker.component.css'],
    imports: [FormsModule, QuizComponent, AsyncPipe]
})
export class QuizMakerComponent {

  private quizService = inject(QuizService);
  categories: Category[] = [];
  currentCategory?: Category;
  categories$ = this.quizService.getAllCategories().pipe(
    tap(categories => this.categories = categories)
  );
  questions$!: Observable<Question[]>;
  subCategory = viewChild<ElementRef<HTMLSelectElement>>("subCategory");

  createQuiz(difficulty: string): void {
    const catId = this.currentCategory?.id ?? 0;
    const id =  (catId || this.subCategory()?.nativeElement.value) ?? 0;
    this.questions$ = this.quizService.createQuiz(id, difficulty as Difficulty);
  }

  selectNewCategory(categoryName: string): void {
    this.currentCategory = this.categories.find((c) => c.name === categoryName);
  }
}
