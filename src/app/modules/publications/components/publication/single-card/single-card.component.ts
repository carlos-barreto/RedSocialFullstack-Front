import { Component, Input, OnInit } from '@angular/core';
import { Publication } from '../../../models/publication';
import { NgStyle, CurrencyPipe } from '@angular/common';
import { environment } from '../../../../../../environments/environment.development';
@Component({
  selector: 'app-single-card',
  standalone: true,
  imports: [NgStyle, CurrencyPipe],
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
