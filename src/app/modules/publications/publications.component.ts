import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
})
export class PublicationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
