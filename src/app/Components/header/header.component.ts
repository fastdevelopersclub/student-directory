import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  
  constructor(private router: Router) {}

  loginpage() {
    this.router.navigate(['login']);
  }

  homepage() {
    this.router.navigate(['']);
  }
}
