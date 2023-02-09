import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent {
  // Décorateur pour changer le comportement de l'élément qu'on décore. On transmet la valeur à notre composant et on le transforme en attribut dans app.component.html
  @Input('postcardTitle') title = 'Titre par défaut'
  // On peut utiliser un alias qu'onpassera en argument de notre décorateur Output comme pour Input. Ce sera alors notre alias que l'on devra écrire entre les () pour lier notre événement à une fonction dans le composant parent
  @Output() clickTitle = new EventEmitter();

  clickedTitle() {
    this.clickTitle.emit(this.title);
  }
}
