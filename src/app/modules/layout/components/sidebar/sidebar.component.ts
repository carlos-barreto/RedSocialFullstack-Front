import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme.service';
import { MenuService } from '../../services/menu.service';
import { RouterLink } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, NgIf, AngularSvgIconModule, SidebarMenuComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  public appJson: any = { displayName: 'Red Social', version: '1.0' };

  constructor(public themeService: ThemeService, public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }

  onSubmitSignOut() {
    localStorage.clear();
  }
}
