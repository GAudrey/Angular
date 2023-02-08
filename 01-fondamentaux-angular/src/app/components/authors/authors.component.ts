import { Component } from '@angular/core';
import { AuthorsListService, Author } from '../../services/authors-list.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  declare authors: Author[];

  constructor(private authorsListService: AuthorsListService) {
    this.authors = this.authorsListService.getAllAuthors();
  }
}
