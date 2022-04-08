import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}
  postUrl = 'https://jsonplaceholder.typicode.com/posts';

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }
  getPostById(id: any): Observable<Post> {
    return this.http.get<Post>(`${this.postUrl}?id'=${id}`);
  }
}
