import {computed, effect, inject, Injectable, Signal, signal} from '@angular/core';
import {Movie} from '../model/movie.model';
import {StorageService} from "./storage.service";


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private storage = inject(StorageService<Movie[]>);
  private favorites = signal<Movie[]>(this.storage.getValue("favorites") ?? []);

  constructor() {
    effect(() => {
      this.storage.setValue("favorites", this.favorites());
    });
  }


  toggleFavorite(movie: Movie): void {
    let index = this.favorites().findIndex((m) => m.id == movie.id);
    if (index == -1) {
      this.favorites.set([...this.favorites(), movie]);
    } else {
      this.favorites().splice(index, 1);
      this.favorites.set([...this.favorites()]);
    }
  }

  isFavorite(movie: Movie): Signal<boolean> {
    return computed(() => (this.favorites().find((m) => m.id == movie.id) != null));
  }
}
