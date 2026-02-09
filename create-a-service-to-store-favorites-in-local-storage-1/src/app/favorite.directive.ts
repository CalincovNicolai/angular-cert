import {Directive, HostBinding, HostListener, inject, input} from '@angular/core';
import {FavoritesService} from './services/favorites.service';
import {Movie} from './model/movie.model';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {

  private favoritesService = inject(FavoritesService);

  movie = input.required<Movie>({alias: "appFavorite"});

  @HostBinding("class.active")
  get isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.movie())();
  }

  @HostListener("click")
  protected toggleFavorite(): void {
    this.favoritesService.toggleFavorite(this.movie());
  }

}


