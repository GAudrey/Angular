import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]' // fait référence à un attribut, pas une div
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(125);
    this.setBorder('#f5f5f5');
  }

  @Input("pkmBorderCard") declare borderColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    // Va déterminer la couleur de notre div lors du hover
    this.setBorder(this.borderColor || "#7fff00");
  }
  @HostListener("mouseleave") onMouseLeave() {
    // Va déterminer la couleur de notre div lors du hover
    this.setBorder("#f5f5f5");
  }

    // ElementRef vient d'Angularcore et va nous permettre d'avoir la référence de l'élem sur lequel nous poitons
  setHeight(height: number) {
    // On définit la hauteur du ElementRef
    this.el.nativeElement.style.height = `${height}px`;
    // Le nativeElement va venir rechercher l'élément DOM car l'ElementRef est en fait un encapsuleur, un wrapper autour de l'élement DOM. Le nativeElement va venir chercher l'élem en question
  }

  setBorder(color: string) {
    // 
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}