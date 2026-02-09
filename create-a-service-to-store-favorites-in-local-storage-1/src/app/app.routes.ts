import { ActivatedRouteSnapshot, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {inject} from '@angular/core';
import {MoviesService} from './services/movies.service';


export const routes: Routes = [
  {path: "", component: HomeComponent},
  {
    path: "details/:id",
    loadComponent: () => import('./movie-details/movie-details.component').then((m) => m.MovieDetailsComponent),
    resolve: {movie: movieDetailsResolver}
  }
];

function movieDetailsResolver(route: ActivatedRouteSnapshot) {
  const movieId =  route.paramMap.get("id") ?? "";
  return inject(MoviesService).getMovieDetails(movieId);
}
