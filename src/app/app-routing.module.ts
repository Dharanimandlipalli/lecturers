import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { SubjectComponent } from './subject/subject.component';


const routes: Routes = [
  {path: 'header' , component: HeaderComponent },
  {path : 'lecturer' , component: LecturerComponent},
  {path: 'subject', component: SubjectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
