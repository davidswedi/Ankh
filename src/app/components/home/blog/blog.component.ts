import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogBarComponent } from './blog-bar/blog-bar.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { SidbarLeftComponent } from './sidbar-left/sidbar-left.component';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    BlogSidebarComponent,
    BlogBarComponent,
    RouterModule,
    SidbarLeftComponent,
  ],
  template: `
    <div class="nav">
      <app-blog-bar></app-blog-bar>
    </div>
    <div class="container">
      <div class="left">
        <app-blog-sidebar></app-blog-sidebar>
      </div>
      <div class="post">
        <router-outlet></router-outlet>
      </div>
      <div class="right">
        <app-sidbar-left></app-sidbar-left>
      </div>
    </div>
  `,
  styles: [
    `
      .nav {
        width: 100%;
        /* height: 60px; */
        /* display: flex; */
        /* align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #cccccc;
        background: #fff; */
        // position: sticky;
        // top: 11%;
        // z-index: 1000;
      }
      .container {
        display: flex;
        // margin-top: 60px;
      }
      .container .left {
        width: 25%;
        height: 92vh;
        overflow: hidden;
        overflow-y: scroll;
        background: #f5f5f5;
        padding: 20px 6px 5px 10px;
        position: fixed;
      }
      .container .left::-webkit-scrollbar {
        width: 7px;
      }

      .container .left::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background: #f5f5f5;
      }

      .container .left:hover::-webkit-scrollbar-thumb {
        background: #cccccc;
      }
      .container .post {
        width: 40%;
        height: auto;
        padding: 20px 20px 0 20px;
        background: #f5f5f5;
        margin-left: 25%;
      }
      .container .right {
        width: 30%;
        height: 92vh;
        overflow: hidden;
        overflow-y: scroll;
        background: #f5f5f5;
        padding: 20px 10px 5px 6px;
        position: fixed;
        right: 0;
      }
    `,
  ],
})
export class BlogComponent {}
