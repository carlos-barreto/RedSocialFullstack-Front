import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { FeedComponent } from './pages/feed/feed.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'pb', pathMatch: 'full' },
      { path: 'pb', component: FeedComponent, data: { returnUrl: window.location.pathname } },
      { path: '**', redirectTo: 'pb', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'all' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
