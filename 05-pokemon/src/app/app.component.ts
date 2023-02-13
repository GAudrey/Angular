import { Component, OnInit } from '@angular/core';
// import { POKEMONS } from './mock-pokemon'; // importe liste de pokemons
// import { Pokemon } from './pokemon'; // importe interface pokemon pour vérifier typage

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '05-pokemon';
  
}


// export class AppComponent implements OnInit {
//   title = '05-pokemon';
//   pokemonList: Pokemon[] = POKEMONS;
//   pokemonSelected: Pokemon | undefined;
//   messageVisible: boolean = false;
//   ngOnInit() { // évite que tout démarre quand le serveur est lancé, ne lancera que ce qui se trouve dans le ngOnInit par défaut
//     console.table(this.pokemonList);
//   };

//   // C'est de la merde
//     // selectPokemon(event: MouseEvent) {
//     //   const pokemon = (event.target as HTMLInputElement).innerHTML;
//     //   console.log(`Vous avez capturé ${pokemon}`);
//     // };

//   selectPokemon(pokemon: string) {
//     console.log(pokemon);
//   }

//   selectPokemonByID(pokemonID: string) { // string car input de type text
//     console.log(pokemonID);
//     const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id === +pokemonID);
//     this.pokemonSelected = pokemon;
//     if(pokemonID === "") {
//       this.messageVisible = false;
//     } else {
//       this.messageVisible = true;
//     }
//   }
// }
