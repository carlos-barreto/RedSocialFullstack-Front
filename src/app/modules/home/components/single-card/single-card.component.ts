import { Component, Input, OnInit } from '@angular/core';
import { Publication } from '../../../publications/models/publication';
import { NgStyle,NgClass, NgIf, NgFor } from '@angular/common';
import { environment } from '../../../../../environments/environment.development';
import { CommentService } from '../../../../core/services/comment.service';
import { log } from 'console';

@Component({
  selector: 'app-single-card',
  standalone: true,
  imports: [NgStyle,NgClass, NgIf, NgFor],
  templateUrl: './single-card.component.html',
  styleUrl: './single-card.component.scss'
})
export class SingleCardComponent {
  @Input() post: Publication = <Publication>{};

  env: string = "";
  public randomComments: any[] = [];

  constructor(private commentService: CommentService) {
    this.env = environment.API_IMAGES;
  }

  ngOnInit(): void {
    this.generateComments()
  }


  generateComments() {
    const numberOfCommentsToGenerate = Math.floor(Math.random() * 7);
    this.randomComments = this.commentService.generateRandomComments(numberOfCommentsToGenerate);
  }
}
