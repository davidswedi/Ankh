import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ViewPostComponent } from '../posts/view-post/view-post.component';
import { PostsComponent } from '../posts/posts.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="tool">
      <app-toolbar></app-toolbar>
    </div>
    <div class="containter">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      * {
        font-family: 'Open Sans', sans-serif;
      }
      .containter {
        margin-top: 70px;
      }
      .tool {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 1000;
      }
    `,
  ],
  imports: [
    CommonModule,
    ToolbarComponent,
    SidebarComponent,
    ViewPostComponent,
    PostsComponent,
    RouterModule,
  ],
})
export class HomeComponent {}
