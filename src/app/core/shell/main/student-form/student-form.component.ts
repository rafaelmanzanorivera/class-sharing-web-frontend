import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../../shared/services/auth-service.service';
import {User} from '../../../_models/user';
import {Student, Teacher} from '../../../_models/teachers';
import {StudentsService} from '../../../../shared/services/students.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styles: []
})
export class StudentFormComponent implements OnInit {

  currentUser: User;

  emailid;
  formdata;


  constructor(private authenticationService: AuthenticationService, private studentsService : StudentsService, private router: Router) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }


  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.formdata = new FormGroup({
      subjects: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ])),
      schedule: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }



  onClickSubmit(data) {
    var now = new Date();
    console.log(data);
    this.emailid = data.emailid;
    let teacher = new Student();
    teacher.age = now.getFullYear() - parseInt(this.currentUser.birth.split('-')[0]);
    teacher.mail = this.currentUser.mail;
    teacher.description = data.description;
    teacher.name = this.currentUser.name;
    teacher.phone = '' + this.currentUser.phone;
    teacher.schedule = data.schedule;
    teacher.subjects = data.subjects;

    console.log(teacher);

    this.studentsService.register(teacher);

    this.router.navigate(['/students'])
  }
}
