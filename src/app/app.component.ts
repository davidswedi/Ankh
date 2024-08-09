import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    PostsComponent,
    HomeComponent,
    RouterModule,
    SidebarComponent,
    ToolbarComponent,
  ],
})
export class AppComponent {
  title = 'ankh-site';
}
