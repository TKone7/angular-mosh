import { FavoriteChangedEventArgs } from './star/star.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [];
  canSave = false;
  loadCourses(){
    this.courses = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'}
    ];
  }
  onChange(course){
    course.name = 'new name';
  }
  trackCourse(index, course){
    course ? course.id : undefined;
  }

  title = 'MyAngularApp';
  post = {
    title: 'Title',
    isFavorite: true
  }

  tweet = {
    liked: true,
    nrlikes: 2021
  }

  task = {
    title: 'Review applications',
    assignee: {
      name: 'Tobias Koller'
    }
  }
  task2 = {
    title: 'Clean room',
    assignee: {
      name: 'Peter Koller'
    }
  }
  tasks = [this.task, this.task2, {title: 'something else', assignee: null}];
  viewMode = 'mdap';
  onFavoriteChange(eventArgs:FavoriteChangedEventArgs){
    console.log('host app recognised change in star component', eventArgs.newValue);
  }

}
