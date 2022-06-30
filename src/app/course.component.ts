import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseItem } from './store/models/courseItem.model';
import { AppState } from './store/models/app-state.model';
import { NgForm } from '@angular/forms';
import { AddItemAction } from './store/actions/course.action';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html'
})

export class CourseComponent {

    courseItems$: Observable<Array<CourseItem>>;
    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.courseItems$ = this.store.select((x) => x.course);
    }

    addCourse(form: NgForm) {
        this.store.dispatch(new AddItemAction(form.value));
        form.reset();
    }

}