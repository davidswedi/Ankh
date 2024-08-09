import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url = 'http://localhost:3000/posts';
  private http = inject(HttpClient);
  constructor() {}

  getPost() {
    return this.http.get<Post[]>(`${this.url}`);
  }
  getPostById(id: number) {
    return this.http.get<Post>(`${this.url}/${id}`);
  }
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.url}`, post);
  }
}
