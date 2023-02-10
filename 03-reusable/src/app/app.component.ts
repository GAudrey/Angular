import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03-reusable';
  clickCountPerAnimal = {
    "otter": 42,
    "owl": 36
  }

  handleClickTitle(title: string) {
    console.log(`You've clicked on ${title}`);
  }

  updatedClickCount(animal: keyof typeof this.clickCountPerAnimal) {
    this.clickCountPerAnimal[animal] +=1;
  }
}
