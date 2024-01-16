import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationsComponent } from './publications.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from '../../core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PublicationsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: 'all' },
    ],
    canActivate: [authGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }
