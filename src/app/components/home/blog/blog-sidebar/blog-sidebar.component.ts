import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from 'src/app/services/posts.service';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-sidebar',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="aside">
      <div id="post-card">
        <div class="post" *ngFor="let post of posts | async">
          <mat-card id="example-card">
            <mat-card-header>
              <mat-card-title class="head">{{ post.slug }}</mat-card-title>
              <mat-card-subtitle>{{ post.date_post }}</mat-card-subtitle>
            </mat-card-header>
            <img mat-card-image [src]="post.photo" alt="Photo of a Shiba Inu" />
            <mat-card-content>
              <p>
                {{ post.title }}
              </p>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      #example-card {
        max-width: 300px;
      }
      img {
        padding: 0.7rem;
      }
      .post {
        margin: 0.3rem;
        padding: 0.7rem;
      }
      .aside {
        display: flex;
        flex-direction: column;
        border-right: 4px solid rgb(95, 95, 95);
        margin-right: 0.7rem;
        /* width: 150px; */
      }
      .head {
        background: dodgerblue;
        color: white;
        border-radius: 10px;
        padding: 0.6rem;
      }
    `,
  ],
})
export class BlogSidebarComponent {
  ps = inject(PostsService);
  readonly posts = this.ps.getPost();
}
