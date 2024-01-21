import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//---------------------------------------------
import { SearchbarComponent } from '../../Components/searchbar/searchbar.component';
//---------------------------------------------

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, SearchbarComponent],
  templateUrl: './landing.component.html',
})
export class LandingComponent {

}
