import { Component, input } from '@angular/core';
import { Movie } from '../model/movie.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-movie-item',
  template: `
    <div class="movie-item">
      <div>
        <h4>{{ movie().title }}</h4>
        <small class="subtitle">
          <span>Release date: {{ movie().release_date }}</span>
          <span>Budget: {{ movie().budget | currency }} million</span>
          <span>Duration: {{ movie().duration }} min</span>
        </small>
      </div>
      <button>Details</button>
    </div>
  `,
  standalone: true,
  styleUrls: ['movie-item.component.scss'],
  imports: [CurrencyPipe],
})
export class MovieItemComponent {
  movie = input.required<Movie>();
}
