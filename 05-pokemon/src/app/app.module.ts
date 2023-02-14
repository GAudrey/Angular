import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
  // import { BorderCardDirective } from './border-card.directive';
  // import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
  // import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
  // import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // BorderCardDirective,
    // PokemonTypeColorPipe,
    // DetailPokemonComponent,
    // ListPokemonComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // Bien préciser les routes enfants AVANT, plus restrictif vers le plus général
    FormsModule,
    PokemonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
