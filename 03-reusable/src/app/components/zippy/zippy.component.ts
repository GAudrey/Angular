import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  isClicked = false;

  @Output() clickTitle = new EventEmitter();

  clickedTitle() {
    this.clickTitle.emit(this.isClicked = true)
  }
}
