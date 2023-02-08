import { Component } from '@angular/core';
import { MoviesService, Movie } from '../../services/movies.service';

@Component({
  // Fonctionne comme un sélecteur css, utiliser une classe est un mauvais plan, préférer l'HTML
  selector: '.firstComponent',
  // Cshemin vers le fichier HTML lié à ma classe
  templateUrl: './my-first-component.component.html',
  // N.O.N., JAMAIS ! N'y pense même pas !
  // Mais on peut écrire de l'HTML directement si on remplace templateUrl par template
  // Note de Leinox : peut s'envisager s'il n'existe que très peu de lignes HTML pour éviter de gérer un autre fichier ==> motivation : flemme
    // template: `
    //   <div>
    //     J'existe, je vous promets.
    //   </div>
    // `,
  styleUrls: ['./my-first-component.component.css'],
  // Toujours une mauvaise idée mais ceci est aussi possible
    // styles: [`
    //   .red {
    //     background-color: red
    //   }
    // `]
})

export class MyFirstComponentComponent {
  // On va utiliser cette propriété/variable et l'afficher dans notre HTML
  victoryScream = 'Hourra !';

  // Ne nécessite un declare que si non-assigné à un constructeur
  declare movies: Movie[];

  constructor(private moviesService: MoviesService) {
    this.movies = this.moviesService.getAllMovies();
  }

  // Retourne banane en chaîne de caractère
  getBanana() {
    return 'banane';
  }
}