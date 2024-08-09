import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from 'src/app/services/posts.service';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="aside">
      <div id="post-card">
        <div class="post" *ngFor="let post of posts | async">
          <mat-card id="example-card" (click)="goTo(post.id)">
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
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  ps = inject(PostsService);
  readonly posts = this.ps.getPost();
  route = inject(Router);
  goTo(id: number) {
    this.route.navigate([`/single-post/${id}`]);
  }
}
