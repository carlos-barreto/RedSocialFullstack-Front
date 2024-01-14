import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [],
  imports: [
    AuthRoutingModule, HttpClientModule, AngularSvgIconModule.forRoot()
  ]
})
export class AuthModule { }
