import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { Movie } from '../model/movie.model';
import { MoviesService } from '../services/movies.service';
import { Observable } from 'rxjs';
import { AsyncPipe, I18nPluralPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    HighlightDirective,
    MovieItemComponent,
    AsyncPipe,
    I18nPluralPipe,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private moviesService = inject(MoviesService);
  protected movies$: Observable<Movie[]> = this.moviesService.getMovies();

  filter(title: string, year: string) {
    this.movies$ = this.moviesService.filterMovieList(title, year);
  }
}
