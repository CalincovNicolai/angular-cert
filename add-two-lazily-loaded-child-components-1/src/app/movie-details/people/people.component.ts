import {Component, Signal} from '@angular/core';
import {MovieDetails} from '../../model/movie.model';

@Component({
  selector: 'app-people',
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export default class PeopleComponent {
  protected movie!: Signal<MovieDetails>;
}
