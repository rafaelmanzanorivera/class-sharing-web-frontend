import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

import {StudentsService} from '../../../../shared/services/students.service';
import {AuthenticationService} from '../../../../shared/services/auth-service.service';
import {User} from '../../../_models/user';

@Component({
  selector: 'app-detail',
  templateUrl: './students-detail.component.html',
  styles: []
})
export class StudentsDetailComponent implements OnInit {

  student = {};
  currentUser : User;

  constructor(private activatedRoute : ActivatedRoute,
              private studentsService : StudentsService,
              private authenticationService: AuthenticationService,
              private router: Router) { this.authenticationService.currentUser.subscribe(x => this.currentUser = x);}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        console.log(id);
        this.studentsService.getById(id).subscribe(
          student => {this.student = student; console.log(student);}
        )
      }
    )
  }

  deleteAnnounce(id)
  {
    this.studentsService.delete(id).subscribe();
    this.router.navigate(['/students'])
  }



}

