//app.routes.ts
import { Routes } from '@angular/router';

//--------------------------------------------
import { LandingComponent } from './Pages/landing/landing.component';
import { LoginComponent } from './Pages/login/login.component';
import { SearchResultsComponent } from './Pages/search-result/search-result.component';
//--------------------------------------------

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'results', component: SearchResultsComponent }
];
