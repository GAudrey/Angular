import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '04-directives';

  colors = ['purple', 'indigo', 'darkslateblue', 'violet', 'plum'];

  viewmode = 'banane';
}
