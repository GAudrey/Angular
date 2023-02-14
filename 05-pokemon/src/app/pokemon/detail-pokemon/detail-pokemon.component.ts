import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
  // import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {}

  declare pokemonList: Pokemon[];

  pokemon: Pokemon | undefined;

  ngOnInit() {
      // this.pokemonList = POKEMONS;

    // snapshot permet d'accéder à la donnée à l'instanté de mon url, paramMap permet d'itérer sur chacun des param de mon url
    const pokemonID: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonID) {
        // this.pokemon = this.pokemonList.find(monster => monster.id == +pokemonID);
      this.pokemon = this.pokemonService.getPokemonByID(+pokemonID);
    }
  }

  goToPokemonList() {
    this.router.navigate(['/'])
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/edit/pokemon', pokemon.id])
  }
}
