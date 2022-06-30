import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseComponent } from "./course.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'course', component: CourseComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }