import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'; 
import { POKEMONS } from './pokemon/mock-pokemon';

@Injectable({
  providedIn: 'root'
})
// On va utiliser ce service comme si c'était une DB
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const pokemons = POKEMONS;
    return { pokemons };
  }
}
