import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]' // fait référence à un attribut, pas une div
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#7fff00';
  private defaultHeight: number = 125;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input("pkmBorderCard") declare borderColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    // Va déterminer la couleur de notre div lors du hover
    this.setBorder(this.borderColor || this.defaultColor);
  }
  @HostListener("mouseleave") onMouseLeave() {
    // Va déterminer la couleur de notre div lors du hover
    this.setBorder(this.initialColor);
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