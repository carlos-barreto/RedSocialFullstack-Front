import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class HomeModule implements OnInit {

  ngOnInit(): void {
    alert('hole')
   }
 }
