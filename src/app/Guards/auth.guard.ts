import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // WRITE CODE TO PROTECT PAGES BASED ON TOKENS IN THE LOCAL STORAGE
  // const router = inject(Router);
  // router.navigate(['landing']);
  return true;
};
