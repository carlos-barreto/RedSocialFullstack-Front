import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AngularSvgIconModule,
    ProfileMenuComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(private menuService: MenuService) { }

  ngOnInit(): void { }

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
