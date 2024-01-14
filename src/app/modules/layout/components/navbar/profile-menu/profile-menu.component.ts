import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [        NgClass,
    RouterLink,],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.scss'
})
export class ProfileMenuComponent implements OnInit  {
  public isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSubmitSignOut() {
    localStorage.clear()
  }
}
