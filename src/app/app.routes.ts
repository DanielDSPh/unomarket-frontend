import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./inicio/inicio.component').then(m => m.InicioComponent)
  },
  {
    path: 'catalogo',
    loadComponent: () =>
      import('./catalogo/catalogo.component').then(m => m.CatalogoComponent)
  },
  { path: '**', redirectTo: '' }
];