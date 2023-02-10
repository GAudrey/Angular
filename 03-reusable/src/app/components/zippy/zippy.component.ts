import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  // isClicked = false;

  // @Output() clickTitle = new EventEmitter();

  // clickedTitle() {
  //   this.clickTitle.emit(this.isClicked = true)
  // }

  /* Correction */
    // Zippy va gagner un attribut title permettant de définir notre propriété
  @Input() declare title: string;
  @Input() isToggled = false;
  @Input() declare manager: string;
  @Input() declare clickCount: number;

  @Output() titleClicked = new EventEmitter();

  toggleContentVisibility() {
    this.titleClicked.emit();
    this.isToggled = !this.isToggled;
  }
}
