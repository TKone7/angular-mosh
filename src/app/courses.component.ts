import { CoursesService } from './courses.service';

import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
    <button (click)="onSave($event)" class="btn btn-primary" [class.active]=isActive >Save</button>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /><br/> 
    
    {{ course.title | uppercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'3.2-2' }} <br/>
    {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'longDate' }} <br/>
    {{ email | summary:10 }} <br/>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses ;
    isActive=true;
    // property binding is one-way
    email: string = "me@bla.com"; 

    course = {
        title: "bla",
        rating: 3.2234,
        students: 324355,
        price: 300.20,
        releaseDate: new Date(2020, 2, 1)
    }
    onSave($event){
        ($event as Event).stopPropagation();
        console.log("something happened: ", $event);
    }

    onDivClicked($event){
        console.log("div was clicked", $event);
    }
    onKeyUp(){
        // 
        // do it with filter instead
        // if($event.keyCode === 13) console.log("Enter was pressed");
        
        // could grap text like this, use template variable instead
        // console.log("Enter was pressed", $event.target.value);
        console.log('email: ' + this.email);
    }
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}