import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from 'src/app/services/posts.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="column" *ngFor="let post of posts | async">
      <a [routerLink]="['/post-detail', post.id]">
        <div class="card">
          <img [src]="post.photo" alt="Photo of a Shiba Inu" />
          <p>{{ post.title }}</p>
          <a>Lire la suite</a>
        </div>
      </a>
    </div>
  `,
  styles: [
    `
      img {
        width: 100%;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    `,
  ],
})
export class HomeBlogComponent {
  ps = inject(PostsService);
  readonly posts = this.ps.getPost();
}
