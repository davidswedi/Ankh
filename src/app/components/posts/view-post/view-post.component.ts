import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PostsService } from 'src/app/services/posts.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

@Component({
  selector: 'app-view-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  template: `
    <!-- <div class="row" > -->
    <div class="column" *ngFor="let post of posts | async">
      <div class="card">
        <img [src]="post.photo" alt="Photo of a Shiba Inu" />
        <p>{{ post.title }}</p>
        <a [routerLink]="['/single-post', post.id]">Lire la suite</a>
      </div>
    </div>
    <!-- </div> -->
    <!-- <div class="row">
      <div class="column">
        <div class="card">
          <h3>Card 1</h3>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <h3>Card 2</h3>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <h3>Card 3</h3>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <h3>Card 4</h3>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>
    </div> -->
    <!-- <div class="post-card">
      <div >
        <mat-card class="example-card">
         
          <mat-card-content>
           
          </mat-card-content>
          
          <mat-card-actions>
            <mat-icon
              svgIcon="thumbs-up"
              aria-hidden="false"
              aria-label="Example thumbs up SVG icon"
            ></mat-icon>
            <button mat-button>SHARE</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div> -->
  `,
  styleUrls: ['./view-post.component.scss'],
})
export class ViewPostComponent {
  ps = inject(PostsService);
  readonly posts = this.ps.getPost();
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral(
      'thumbs-up',
      sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON)
    );
  }
}
