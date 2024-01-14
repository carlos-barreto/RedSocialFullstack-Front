import { Component, Input, OnInit } from '@angular/core';
import { SubMenuItem } from '../../../../../core/models/menu.model';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgFor, NgTemplateOutlet, NgIf } from '@angular/common';

@Component({
  selector: 'div[navbar-submenu]',
  standalone: true,
  imports: [
    NgFor,
    NgTemplateOutlet,
    RouterLinkActive,
    RouterLink,
    NgIf,
    AngularSvgIconModule
  ],
  templateUrl: './navbar-submenu.component.html',
  styleUrl: './navbar-submenu.component.scss'
})
export class NavbarSubmenuComponent implements OnInit {
  @Input() public submenu = <SubMenuItem[]>{};

  constructor() {}

  ngOnInit(): void {}
}
