import { FollowerService, Follower } from './../services/follower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {
  followers: Follower[];
  constructor(private service: FollowerService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe( 
        followers => {
          this.followers = followers;
        }
      );
  }

}
