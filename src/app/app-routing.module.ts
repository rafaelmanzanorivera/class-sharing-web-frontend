import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeachersComponent} from './core/shell/main/teachers/teachers.component';
import {StudentsComponent} from './core/shell/main/students/students.component';
import {InitComponent} from './core/shell/main/init/init.component';
import {TeacherFormComponent} from './core/shell/main/teacher-form/teacher-form.component';
import {StudentFormComponent} from './core/shell/main/student-form/student-form.component';
import {LoginComponent} from './core/shell/login/login.component';
import {SignUpComponent} from './core/shell/sign-up/sign-up.component';
import {TeacherDetailComponent} from './core/shell/main/teacherDetail/teacher-detail.component';
import {StudentsDetailComponent} from './core/shell/main/student-details/students-detail.component';

const routes: Routes = [
  {
    path: 'teachers',
    component: TeachersComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'student-form',
    component: StudentFormComponent
  },
  {
    path: 'teacher-form',
    component: TeacherFormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo:'teachers'
  },
  {
    path: 'teachers/:id',
    component: TeacherDetailComponent
  },
  {
    path: 'students/:id',
    component:StudentsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
