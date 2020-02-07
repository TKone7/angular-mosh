import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

export interface Post {
  id: number,
  user_id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService<Post> {
  constructor(http: HttpClient) {
    super("http://jsonplaceholder.typicode.com/posts", http);
  }
}
