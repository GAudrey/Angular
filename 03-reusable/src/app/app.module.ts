import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostcardComponent } from './components/postcard/postcard.component';
import { ZippyComponent } from './components/zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    PostcardComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
