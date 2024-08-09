import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-bar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatToolbarModule],
  template: `
    <p>
      <mat-toolbar>
        <span>Actualités</span>
        <span class="example-spacer"></span>
        <a routerLinkActive="activate" routerLink="post-detail">Post</a>
        <a routerLinkActive="activate" routerLink="home-blog">Add Post</a>
        <a href="">Santé</a>
        <a href="">Education</a>
        <a href="">Finance</a>
        <a href="">Sport</a>
        <a href="">Politique</a>
        <span class="example-spacer"></span>
      </mat-toolbar>
    </p>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;1,100;1,200;1,400;1,500&display=swap');

      .example-spacer {
        flex: 1 1 auto;
      }
      a {
        text-decoration: none;
        color: inherit;
        font-size: medium;
        margin: 0.5rem;
        font-weight: 400;
        font-family: 'Open Sans', sans-serif;
      }
      /* .activate {
        background: gray;
      } */
      .tool {
        width: 100%;
        /* height: 60px; */
        /* display: flex; */
        /* align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #cccccc;
        background: #fff; */
        /* position: fixed;
        top: 12%;
        z-index: 1000; */
      }
    `,
  ],
})
export class BlogBarComponent {}
