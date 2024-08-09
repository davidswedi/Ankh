import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  template: `
    <div class="example-container">
      <h1>Inscrivez-vous</h1>
      <mat-form-field>
        <mat-label>Enter your email</mat-label>
        <input
          matInput
          placeholder="pat@example.com"
          [formControl]="email"
          required
        />
        <mat-error *ngIf="email.invalid">{{ getErrorMessage() }}</mat-error>
      </mat-form-field>
      <br />
      <mat-form-field>
        <mat-label>Enter your password</mat-label>
        <input matInput [type]="hide ? 'password' : 'text'" />
        <button
          mat-icon-button
          matSuffix
          (click)="hide = !hide"
          [attr.aria-label]="'Hide password'"
          [attr.aria-pressed]="hide"
        >
          <mat-icon>{{ hide ? 'visibility_off' : 'visibility' }}</mat-icon>
        </button>
      </mat-form-field>
      <br />
      <mat-form-field>
        <mat-label>Input</mat-label>
        <input matInput />
      </mat-form-field>
      <br />
      <mat-form-field>
        <mat-label>Input</mat-label>
        <input matInput />
      </mat-form-field>
      <br />
      <button mat-raised-button color="primary">Sign up</button>
    </div>
  `,
  styles: [
    `
      .example-container {
        width: 500px;
        margin: 0 auto;
        padding: 0.8rem;
        border-radius: 8px;
        border: 1px solid gray;
      }
      mat-form-field {
        width: 100%;
        border-radius: 8px;
      }
    `,
  ],
})
export class SignupComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
