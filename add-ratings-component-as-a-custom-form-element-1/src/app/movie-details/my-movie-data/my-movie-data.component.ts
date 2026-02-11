import {
  Component,
  inject,
  input,
  OnInit,
  WritableSignal,
} from '@angular/core';
import { RatingsComponent } from '../ratings/ratings.component';
import { FormsModule } from '@angular/forms';
import { MovieDetails } from '../../model/movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-my-movie-data',
  imports: [RatingsComponent, FormsModule],
  templateUrl: './my-movie-data.component.html',
  styleUrl: './my-movie-data.component.scss',
})
export default class MyMovieDataComponent implements OnInit {
  protected movie = input.required<MovieDetails>();

  rating: WritableSignal<number>;
  private service = inject(MoviesService);

  ngOnInit() {
    this.rating = this.service.getRating(this.movie());
  }
}
