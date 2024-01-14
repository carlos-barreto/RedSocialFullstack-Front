import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SubMenuItem } from '../../../../../core/models/menu.model';
import { MenuService } from '../../../services/menu.service';
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgFor, NgClass, NgTemplateOutlet, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgFor,
    NgClass,
    AngularSvgIconModule,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    SidebarSubmenuComponent,
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent  implements OnInit {
  constructor(public menuService: MenuService) {}

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  ngOnInit(): void {}
}
