import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingDemoComponent } from './components/binding-demo/binding-demo.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingDemoComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
