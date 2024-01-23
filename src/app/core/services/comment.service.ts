import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  generateRandomComments(numComments: number): string[] {
    const comments: any[] = [];

    for (let i = 0; i < numComments; i++) {
      const user = {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
      };
      const comment = {
        text: faker.lorem.sentence(),
        user: user,
      };
      comments.push(comment);
    }

    return comments;
  }
}
