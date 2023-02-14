import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
// import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    // { path: "pokemons", component: ListPokemonComponent },
  // Il y a : devant id car il va devoir être fourni dans ce cas-ci
    // { path: "pokemon/:id", component: DetailPokemonComponent },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  // Si n'importe quoi est écrit, redirection vers not found
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
