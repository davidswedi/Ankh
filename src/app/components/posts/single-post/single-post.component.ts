import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsComponent } from '../posts.component';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="post-card">
      <div class="post">
        <mat-card class="example-card">
          <img
            mat-card-image
            [src]="(post | async)?.photo"
            alt="Photo of a Shiba Inu"
          />
          <mat-card-content>
            <p [innerHTML]="(post | async)?.title"></p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>SHARE</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
    <div class="comments">
      <img src="" alt="" />
      <div class="user-info">
        <h3>User Name</h3>
      </div>
      <div class="post-content">
        <p>Bonjour</p>
        <div class="date">10/10/2023</div>
      </div>
    </div>
    <div class="comments">
      <img src="" alt="" />
      <div class="user-info">
        <h3>User Name</h3>
      </div>
      <div class="post-content">
        <p>Bonjour</p>
        <div class="date">10/10/2023</div>
      </div>
    </div>
    <div class="comments">
      <img src="" alt="" />
      <div class="user-info">
        <h3>User Name</h3>
      </div>
      <div class="post-content">
        <p>Bonjour</p>
        <div class="date">10/10/2023</div>
      </div>
    </div>
  `,
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent {
  private ps = inject(PostsService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  postId = Number(this.route.snapshot.params['id']);

  post = this.ps.getPostById(this.postId);

  getCOmment() {
    return this.post.subscribe(() => {});
  }
  constructor() {}
}
