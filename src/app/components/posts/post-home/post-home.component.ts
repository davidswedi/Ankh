import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../../toolbar/toolbar.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { ViewPostComponent } from '../view-post/view-post.component';

@Component({
  selector: 'app-post-home',
  standalone: true,
  template: ` Post `,
  styles: [
    `
      * {
        font-family: 'Open Sans', sans-serif;
      }
      .containter {
        display: flex;
      }
      .tool {
        position: sticky;
        top: 0;
        z-index: 100;
      }
    `,
  ],
  imports: [
    CommonModule,
    ViewPostComponent,
    ToolbarComponent,
    SidebarComponent,
  ],
})
export class PostHomeComponent {}
