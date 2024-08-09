import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { HomeBlogComponent } from '../home-blog/home-blog.component';
import { Observable, Subscription, iif } from 'rxjs';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, HomeBlogComponent, MatCardModule],
  template: `
    <div class="post-card">
      <div class="post">
        <mat-card class="example-card">
          <mat-card-content>
            <h2>{{ (post | async)?.title }}</h2>
          </mat-card-content>
          <img
            mat-card-image
            [src]="(post | async)?.photo"
            alt="Photo of a Shiba Inu"
          />
          <mat-card-content>
            <p [innerHTML]="(post | async)?.content"></p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>SHARE</button>
          </mat-card-actions>
        </mat-card>
        <div *ngFor="let comment of (post | async)?.comments">
          <ul>
            <li>{{ comment.content }}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      img {
        padding: 0.5rem;
      }
    `,
  ],
})
export class PostDetailComponent {
  post!: Observable<Post>;
  postSubs!: Subscription;
  private ps = inject(PostsService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.postSubs = this.route.params.subscribe((params) => {
      this.post = this.ps.getPostById(Number(params['id']));
    });
  }

  ngOnDestroy(): void {
    this.postSubs.unsubscribe();
  }
}
