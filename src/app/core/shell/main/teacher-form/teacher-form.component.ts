import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../_models/user';
import {AuthenticationService} from '../../../../shared/services/auth-service.service';
import {TeachersService} from '../../../../shared/services/teachers.service';
import {Teacher} from '../../../_models/teachers';
import {Router} from '@angular/router';


@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styles: []
})


export class TeacherFormComponent implements OnInit {

  constructor(private AuthService: AuthenticationService,
              private router: Router,
              private teacherService: TeachersService) {
    this.AuthService.currentUser.subscribe(x => this.currentUser = x);
  }

  currentUser: User;
  emailid;
  formdata;

  ngOnInit() {
    this.AuthService.currentUser.subscribe(x => this.currentUser = x);
    this.formdata = new FormGroup({
      subjects: new FormControl('',  Validators.required),
      schedule: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }


  onClickSubmit(data) {
    var now = new Date();
    console.log(data);
    this.emailid = data.emailid;
    let teacher = new Teacher();
    teacher.age = now.getFullYear() - parseInt(this.currentUser.birth.split('-')[0]);
    teacher.mail = this.currentUser.mail;
    teacher.description = data.description;
    teacher.name = this.currentUser.name;
    teacher.phone = '' + this.currentUser.phone;
    teacher.schedule = data.schedule;
    teacher.subjects = data.subjects;

    console.log(teacher);

    this.teacherService.register(teacher);

    this.router.navigate(['/teachers'])



  }

}
