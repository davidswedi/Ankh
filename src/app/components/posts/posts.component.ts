import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [RouterModule, ToolbarComponent],
  template: `
    <app-toolbar></app-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {}
