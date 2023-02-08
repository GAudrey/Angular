import { Component } from '@angular/core';
import { AuthorsListService, Author } from '../../services/authors-list.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authors: Author[];

  // private car n'a pas besoin de sortir de la classe
  constructor(private authorsListService: AuthorsListService) {
    this.authors = this.authorsListService.getAllAuthors();
  }
}
