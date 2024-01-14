import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit {
  public open : boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
