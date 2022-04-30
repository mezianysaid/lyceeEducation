import { Component } from '@angular/core';
import { AuthentificationService } from './Services/_auth/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello';
  constructor(public _authService:AuthentificationService){

  }
}
