import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { authGuard } from '../../core/guards/auth/auth.guard'

const routes: Routes = [
  {
    path: 'wall',
    component: LayoutComponent,
    loadChildren: () => import('../publications/publications.module').then((m) => m.PublicationsModule),
    canActivate: [authGuard]
  },
  { path: '', redirectTo: 'wall', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
