import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { POKEMONS } from '../mock-pokemon'; // importe liste de pokemons
import { Pokemon } from '../pokemon'; // importe interface pokemon pour vérifier typage
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
})
export class ListPokemonComponent implements OnInit {
  // pokemonList: Pokemon[] = POKEMONS;

  declare pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
      // this.pokemonList = this.pokemonService.getPokemonList();
      
    /* ------------------ Pour requêtre HTTP ------------------ */
    this.pokemonService.getPokemonList().subscribe(myPokemonList => this.pokemonList = myPokemonList);
  }
  
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id])
  }
}
