import { Component } from '@angular/core';
import { Auth } from '../../../auth/services/auth';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {
  constructor(private authService: Auth) {}

  logout(): void {
    this.authService.logout();
  }
}
