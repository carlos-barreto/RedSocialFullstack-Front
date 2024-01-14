import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AngularSvgIconModule, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
