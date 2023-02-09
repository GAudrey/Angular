import { Component } from '@angular/core';

enum Star {
  EMPTYSTAR = '☆',
  FILLEDSTAR = '★',
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  star = Star.EMPTYSTAR;

  toggleIsFavorite() {
    this.star = this.star === Star.EMPTYSTAR ? Star.FILLEDSTAR : Star.EMPTYSTAR
  }

  // Deuxième façon de faire
    // isFavorite = false;
}
