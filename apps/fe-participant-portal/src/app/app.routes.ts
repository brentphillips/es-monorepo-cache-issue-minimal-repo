import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`@es/fe-participant-portal/app-shell`).then((_) => _.AppShellModule),
  },
  { path: '**', redirectTo: 'profile' },
];
