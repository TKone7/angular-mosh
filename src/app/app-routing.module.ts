import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { MyFollowersComponent } from './my-followers/my-followers.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [ 
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'followers/:id/:username',
    component: GithubProfileComponent
  },
  {
    path: 'followers',
    component: MyFollowersComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
