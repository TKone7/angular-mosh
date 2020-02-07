import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {

  @Input('is-liked') isLiked: boolean = false;
  @Input('nr-likes') likeCount: number = 0;
  
  onClick(){
    this.likeCount += (this.isLiked) ? -1 : 1;
    this.isLiked = !this.isLiked;
  }

}
