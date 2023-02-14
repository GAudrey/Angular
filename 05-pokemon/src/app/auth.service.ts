import { Injectable } from '@angular/core';
import { Observable, of, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn: boolean = false;
  declare redirectUrl: string;

  login(name: string, password: string): Observable<boolean> {
    const isLogged = (name == "Pokémaster" && password == "Mew");
    return of(isLogged).pipe(
      delay(1000),
      tap(isLogged => this.isLoggedIn = isLogged),
    )
  }

  logout() {
    this.isLoggedIn = false;
  }
}
