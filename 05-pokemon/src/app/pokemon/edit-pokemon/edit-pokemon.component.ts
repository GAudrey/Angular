import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
  <h2 class="center">Editer {{ pokemon?.name }}</h2>
  <p *ngIf="pokemon" class="center">
    <img [src]="pokemon.picture"/>
  </p>
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styleUrls: []
})
export class EditPokemonComponent implements OnInit{
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {

  }

  ngOnInit(){
    const pokemonID: string | null = this.route.snapshot.paramMap.get('id');

    if(pokemonID) {
        // this.pokemon = this.pokemonService.getPokemonByID(+pokemonID);
      
      /* ------------------ Pour requêtre HTTP ------------------ */
      this.pokemonService.getPokemonByID(+pokemonID).subscribe(myPokemon => this.pokemon = myPokemon);
    }
  }
}
