import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService], 
})
export class AppComponent {
  title = 'lab5';
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}

