import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent {
  isNotAllowedToWrite = false;
  isPremium = true;
  userName = 'Varoh';

  changeUserName(input: HTMLInputElement) {
    this.userName = input.value;
    input.value = "";
  }
}