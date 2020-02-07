import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  submit(){
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest'}
    })
  }
  ngOnInit() {
    console.log('oninit');
    // use the snapsoot only if the user cannot link to the same page and dom must therefore been discarded
    // this.route.snapshot.paramMap.get('id');
    this.route.paramMap
      .subscribe( params => {
        // + converts to number
        let id = +params.get('id');
        console.log(id);
        // call a service with the user id
      })
  };

}
