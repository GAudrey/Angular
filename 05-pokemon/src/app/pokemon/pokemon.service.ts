import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemonList(): Pokemon[] {
    return POKEMONS
  }

  getPokemonByID(pokemonID: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonID);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte', 
      'Normal', 
      'Electrik', 
      'Fée', 
      'Vol', 
      'Combat', 
      'Psy',
      'Poison'
    ]
  }
}
