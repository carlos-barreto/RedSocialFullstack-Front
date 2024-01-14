import { Component, Input, OnInit } from '@angular/core';
import { SubMenuItem } from '../../../../../core/models/menu.model';
import { MenuService } from '../../../services/menu.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-sidebar-submenu',
  standalone: true,
  imports: [NgClass,
    NgFor,
    NgTemplateOutlet,
    RouterLinkActive,
    RouterLink,
    AngularSvgIconModule,],
  templateUrl: './sidebar-submenu.component.html',
  styleUrl: './sidebar-submenu.component.scss'
})
export class SidebarSubmenuComponent implements OnInit {
  @Input() public submenu = <SubMenuItem>{};

  constructor(public menuService: MenuService) { }

  ngOnInit(): void { }

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
