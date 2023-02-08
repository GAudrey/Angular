import { Injectable } from '@angular/core';

export interface Author {
  authorName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorsListService {

  constructor() { }

  getAllAuthors(): Author[] {
    return [
      {
        authorName: 'Graham Masterston'
      }, 
      {
        authorName: 'Joseph Delaney'
      },
      {
        authorName: 'Thomas Day'
      }
    ]
  }
}
