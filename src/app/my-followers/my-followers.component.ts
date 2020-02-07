import { FollowerService, Follower } from './../services/follower.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {
  followers: Follower[];
  

  constructor(
    private route: ActivatedRoute,
    private service: FollowerService
  )
  { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        return this.service.getAll( /* pass parameters here */);
      })
    )
    .subscribe(followers => this.followers = followers);

    /*
    this.route.paramMap
      .subscribe( params => {

    });

    this.route.queryParamMap
      .subscribe( params => {
        this.page = params.get('page')
      } );
      */
    
  }

}
