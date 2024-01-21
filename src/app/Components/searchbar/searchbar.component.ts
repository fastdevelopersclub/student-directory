import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searchbar.component.html',
  styles: ``
})
export class SearchbarComponent {

  constructor(private router: Router) {}
   
  searchresultpage()
  {
    this.router.navigate(['results']);
  }
}
