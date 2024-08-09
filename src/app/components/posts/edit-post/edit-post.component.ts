import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>edit</p> `,
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent {
  fileToUpload: File | undefined;

  constructor() {}

  ngOnInit() {}
}
