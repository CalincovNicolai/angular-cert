import {Component, input} from '@angular/core';
import {MovieDetails} from '../model/movie.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-movie-details',
  template: `
    <h1>{{ movie().title }}</h1>
    <div class="details">
      @if (movie().poster) {
        <img [ngSrc]="movie().poster || ''" width="200" height="100" alt="Poster">
      }
      <div>
        <p>
          <span>Summary: </span>
          <span>{{ movie().summary }}</span>
        </p>
      </div>
    </div>
    <div>
      Display:
      <button>Numbers</button>
      <button>People</button>
    </div>
    <div>
      TODO: Display child route here
    </div>
  `,
  styleUrls: [ 'movie-details.component.scss' ],
  imports: [NgOptimizedImage]
})
export class MovieDetailsComponent {

  protected movie = input.required<MovieDetails>();
}

