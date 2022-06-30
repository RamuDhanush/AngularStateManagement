import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CourseReducer } from './store/reducers/course.reducer';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home.component';
import { CourseComponent } from './course.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      course: CourseReducer,
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
