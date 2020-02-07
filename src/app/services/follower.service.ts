import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

export interface Follower {
  login: string,
  avatar_url: string,
  html_url: string
}

@Injectable({
  providedIn: 'root'
})
export class FollowerService extends DataService<Follower> {

  constructor(http: HttpClient) { 
    super("https://api.github.com/users/mosh-hamedani/followers", http)
  }
}
