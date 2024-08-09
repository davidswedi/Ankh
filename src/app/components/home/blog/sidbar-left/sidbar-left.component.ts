import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PostsService } from 'src/app/services/posts.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidbar-left',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  template: `
    <div class="aside">
      <div id="post-card">
        <div class="post" *ngFor="let post of posts | async">
          <a [routerLink]="['/post-detail', post.id]">
            <mat-card id="example-card">
              <mat-card-header>
                <mat-card-title class="head">{{ post.slug }}</mat-card-title>
                <mat-card-subtitle>{{ post.date_post }}</mat-card-subtitle>
              </mat-card-header>
              <img
                mat-card-image
                [src]="post.photo"
                alt="Photo of a Shiba Inu"
              />
              <mat-card-content>
                <p>
                  {{ post.title }}
                </p>
              </mat-card-content>
            </mat-card>
            <p></p>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .aside {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 0.8rem;
      }
      img {
        width: 100%;
        padding: 0.8rem;
      }
    `,
  ],
})
export class SidbarLeftComponent {
  ps = inject(PostsService);
  readonly posts = this.ps.getPost();
}
