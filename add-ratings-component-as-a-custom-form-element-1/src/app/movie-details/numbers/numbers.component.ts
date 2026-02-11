import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {MillionDollarPipe} from "../../pipes/million-dollar.pipe";
import {MinToDurationPipe} from "../../pipes/min-to-duration.pipe";
import {MovieDetails} from '../../model/movie.model';

@Component({
  selector: 'app-numbers',
  imports: [
      MillionDollarPipe,
      MinToDurationPipe
  ],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumbersComponent {
  protected movie = input.required<MovieDetails>();
}
