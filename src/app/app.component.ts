import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Tailwind';

  constructor(public themeService: ThemeService) {}
}
