import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchbarComponent } from '../../Components/searchbar/searchbar.component';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule, SearchbarComponent],
  templateUrl: './search-result.component.html',
  styles: ``
})

export class SearchResultsComponent {
  result = [
    { id: 1, name: 'Ali Azhar', description: '7th Semester | C++ | DataInsight Intern', image: '../../../assets/images/pfp.jpg'},
    { id: 2, name: 'Waleed Khan', description: 'Graduate (Batch 19) | Python | SWE @ Motive', image: '../../../assets/images/pfp.jpg'},
    { id: 3, name: 'Hamza Rashid', description: '6th Semester | .NET | SWE @ Folio3 (Part-time)', image: '../../../assets/images/pfp.jpg'}
  ];
}