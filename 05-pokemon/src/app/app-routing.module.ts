import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  { path: "pokemons", component: ListPokemonComponent },
  // Il y a : devant id car il va devoir être fourni dans ce cas-ci
  { path: "pokemons/:id", component: DetailPokemonComponent },
  { path: "", redirectTo: 'pokemons', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
