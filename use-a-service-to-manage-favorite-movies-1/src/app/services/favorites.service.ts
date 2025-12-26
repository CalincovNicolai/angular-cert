import { Injectable, signal } from '@angular/core';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favorites = signal<Movie[]>([]);

  toggleFavorite(movie: Movie): void {
    let index = this.favorites().findIndex((m) => m.id === movie.id);
    if (index == -1) {
      this.favorites.set([...this.favorites(), movie]);
    } else {
      this.favorites().splice(index, 1);
      this.favorites.set(this.favorites());
    }
  }

  isFavorite(movie: Movie): boolean {
    return this.favorites().find((m) => m.id === movie.id) != null;
  }
}
