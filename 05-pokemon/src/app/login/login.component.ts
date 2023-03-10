import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  message: string = "Vous êtes déconnecté. (Pokémaster/Mew)";
  declare name: string;
  declare password: string;
  declare auth: AuthService;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
      this.auth = this.authService;
  }

  setMessage() {
    if(this.authService.isLoggedIn) {
      this.message = "Vous êtes connecté"
    } else {
      this.message = "Identifiant ou mot de passe incorrect"
    }
  }

  login() {
    this.message = "Tentative de connexion en cours...";
    this.authService.login(this.name, this.password).subscribe((isLoggedIn: boolean) => {
      this.setMessage();
      if(isLoggedIn) {
        this.router.navigate(['/pokemons']);
      } else {
        this.password = "";
        this.router.navigate(['/login']);
      }
    });
  }

  logout() {

  }
}
