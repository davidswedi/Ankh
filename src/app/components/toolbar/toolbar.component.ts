import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  template: `
    <mat-toolbar color="primary">
      <button
        mat-icon-button
        class="example-icon"
        aria-label="Example icon-button with menu icon"
      >
        <mat-icon>menu</mat-icon>
      </button>
      <span>ANKH Enterprise</span>
      <span class="example-spacer"></span>
      <span class="example-spacer"></span>
      <a routerLinkActive="activate" routerLink="/">Actualités</a>
      <a href="">E-commerce</a>
      <a href="">Mines</a>
      <a routerLinkActive="activate" routerLink="signup">S'inscrire</a>
      <a mat-flat-button routerLinkActive="activate" routerLink="login"
        >Se connecter</a
      >
    </mat-toolbar>
  `,
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private route: Router) {}
  redirectAddPost() {
    this.route.navigate(['/add-post']);
  }
}
