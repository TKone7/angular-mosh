import { AppError } from './../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { PostService, Post } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts: Post[];

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(
        posts => { this.posts = posts }
      );
  }

  constructor(private service: PostService) { }

  showPost(post){
    this.service.get(post.id)
      .subscribe(
        post => {
          console.log('Title: ' + post.title);
        },
        (error: AppError) => {
          if(error instanceof NotFoundError)
            alert('This post was not found.');
          else{
            throw error;
          }
        }
      );
  }
  createPost(inputField: HTMLInputElement){
    let post = { title: inputField.value };
    this.posts.splice(0,0,(post as Post));

    inputField.value="";

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          console.log(post);
        },
        (error: AppError) => {
          this.posts.splice(0,1);

          if(error instanceof BadInputError){
            // if we work with errors in forms
            // this.form.setErrors(error.json());
          }else{
            throw error;
          }
        }
      );
  }
  updatePost(post){
    // patch for partially update (few properties), not widely supported
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        }
      );
  }
  
  deletePost(post){
    this.service.delete(post.id);
    
    
    /*
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1)

    this.service.delete(post.id)
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(index,0,post);

          if(error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else{
            throw error;
          }
        }
      );
  */
  }
  
}
