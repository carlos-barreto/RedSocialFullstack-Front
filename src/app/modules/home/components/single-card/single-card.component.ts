import { Component, Input, OnInit } from '@angular/core';
import { Publication } from '../../../publications/models/publication';
import { NgStyle } from '@angular/common';
import { environment } from '../../../../../environments/environment.development';
@Component({
  selector: 'app-single-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './single-card.component.html',
  styleUrl: './single-card.component.scss'
})
export class SingleCardComponent {
  @Input() post: Publication = <Publication>{};
  env: string = "";
  constructor() {
    this.env = environment.API_IMAGES;
  }

  ngOnInit(): void {}
}
