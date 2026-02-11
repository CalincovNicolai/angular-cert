import {Component, input} from '@angular/core';
import {MovieDetails} from '../model/movie.model';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';


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
      <button routerLink="./numbers">Numbers</button>
      <button routerLink="./people">People</button>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ 'movie-details.component.scss' ],
  imports: [NgOptimizedImage, RouterOutlet, RouterLink]
})
export class MovieDetailsComponent {

  protected movie = input.required<MovieDetails>();
}

