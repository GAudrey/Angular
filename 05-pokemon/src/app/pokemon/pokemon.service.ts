import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
  // import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

    // getPokemonList(): Pokemon[] {
    //   return POKEMONS
    // }

  /* ------------------------ Requête HTTP ------------------------ */
  // Utilisation d'un observable car ne renvoie pas de donnée directement mais sera envoyée dans le courant d'un flux et ces données arriveront à un moment donné dans le temps --> async
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => this.handleError(error, [])),
    )
  }

    // getPokemonByID(pokemonID: number): Pokemon | undefined {
    //   return POKEMONS.find(pokemon => pokemon.id == pokemonID);
    // }

  /* ------------------------ Requête HTTP ------------------------ */
  getPokemonByID(pokemonID: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonID}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, undefined)),
    )
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null)),
    )
  }

  deletePokemonByID(pokemonID: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonID}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null)),
    )
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null)),
    )
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
      'Poison',
    ]
  }

  private log(response: any) {
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}