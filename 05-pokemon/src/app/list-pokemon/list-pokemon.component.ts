import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon'; // importe liste de pokemons
import { Pokemon } from '../pokemon'; // importe interface pokemon pour vérifier typage

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;
}
