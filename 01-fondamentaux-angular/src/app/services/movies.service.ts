import { Injectable } from '@angular/core';

export interface Movie {
  title: string;
  description: string;
}

/* Le mot clé injectable rend l'instance de la classe connu par Angular. Cette instance pourra être ditribuée à la demande dans nos composants */
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getAllMovies(): Movie[] {
    return [
      {
        title: 'Forest Gump',
        description: 'Il court mais pas la maladie d\'amour',
      }, 
      {
        title: 'Alice aux pays des merveilles',
        description: 'Le lapin qui est en retard, il bosse à la SNCB'
      },
      {
        title: 'L\'attaque des bananes martiennes',
        description: 'Un film pas terrible'
      }
    ]
  }
}