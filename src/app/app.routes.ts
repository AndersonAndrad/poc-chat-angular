import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/chat/chat.module').then(({ChatModule}) => ChatModule)}
];
