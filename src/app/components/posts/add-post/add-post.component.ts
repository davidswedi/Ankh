import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    EditorModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
  ],
  template: `
    <h2>Ajouter un Post</h2>
    <form [formGroup]="form" (ngSubmit)="myForm()">
      <br />
      <mat-form-field>
        <mat-label>Titre</mat-label>
        <input type="text" formControlName="title" matInput />
      </mat-form-field>
      <br />
      <div>
        <select formControlName="category">
          <option value="politique">Politique</option>
          <option value="sante">Sante</option>
          <option value="economie">Economie</option>
          <option value="education">Education</option>
        </select>
      </div>
      <br />
      <h2>Contenu</h2>
      <editor
        [init]="{ plugins: 'lists link image table code help wordcount' }"
        [apiKey]="apiKey"
        formControlName="contenu"
      ></editor>
      <button type="submit">Publier</button>
    </form>
  `,
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  apiKey = 'kbl7vxqlcw6fxwpk85gzzbmwidhsqq4p28dwfsm3kp7a3cnq';

  ps = inject(PostsService);
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    contenu: new FormControl(''),
    category: new FormControl(''),
  });
  date = new Date();
  strDate = this.date.toLocaleDateString();
  myForm() {
    const post: Post = {
      id: 13,
      title: this.form.value.title!,
      author: 'David',
      content: this.form.value.contenu!,
      slug: this.form.value.category!,
      date_post: this.strDate,
      date_udpdate: '',
      photo: 'assets/images/monusco.jpg',
      comments: [],
    };
    console.log(post);
    this.ps.addPost(post).subscribe(
      (post: any) => {
        console.log('Post added ');
      },
      (error) => {
        console.log(error);
      }
    );
    this.form.reset();
  }
}
