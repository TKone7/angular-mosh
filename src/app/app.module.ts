import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FollowerService } from './services/follower.service';
import { AppErrorHandler } from './common/app-error-handler';
import { ProductService } from './services/product.service';
import { PostService } from './services/post.service';
import { TitlePipe } from './titlecase.pipe';
import { SummaryPipe } from './summary.pipe';
import { AuthorService } from './author.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { StarComponent } from './star/star.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PwdChangeFormComponent } from './pwd-change-form/pwd-change-form.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { MyFollowersComponent } from './my-followers/my-followers.component';

@NgModule({
  declarations: [
    //Pipes
    SummaryPipe,
    TitlePipe,
    // components
    SignupFormComponent,
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    StarComponent,
    TitlecaseComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    NewCourseFormComponent,
    PwdChangeFormComponent,
    PostsComponent,
    ProductsComponent,
    MyFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // singleton pattern of the services defined here
    CoursesService,
    AuthorService,
    PostService,
    ProductService,
    FollowerService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
