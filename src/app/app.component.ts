import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//--------------------------------------------
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeroComponent } from './Components/hero/hero.component';
//--------------------------------------------

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HeroComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'website';
}
