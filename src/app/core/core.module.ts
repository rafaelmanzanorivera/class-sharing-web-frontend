import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';
import { RouterModule} from '@angular/router';
import { TeachersComponent } from './shell/main/teachers/teachers.component';
import { StudentsComponent } from './shell/main/students/students.component';
import { InitComponent } from './shell/main/init/init.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TeacherFormComponent } from './shell/main/teacher-form/teacher-form.component';
import { StudentFormComponent } from './shell/main/student-form/student-form.component';
import { LoginComponent } from './shell/login/login.component';
import { SignUpComponent } from './shell/sign-up/sign-up.component';
import { CardComponent } from './shell/main/card/card.component';
import { TeacherDetailComponent } from './shell/main/teacherDetail/teacher-detail.component';
import { StudentsDetailComponent } from './shell/main/student-details/students-detail.component';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, MainComponent, FooterComponent, TeachersComponent, StudentsComponent, InitComponent, TeacherFormComponent, StudentFormComponent, LoginComponent, SignUpComponent, CardComponent, TeacherDetailComponent, StudentsDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ShellComponent]
})
export class CoreModule { }
