import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TeachersService} from '../../../../shared/services/teachers.service';
import {Teacher} from '../../../_models/teachers';
import {AuthenticationService} from '../../../../shared/services/auth-service.service';
import {User} from '../../../_models/user';

@Component({
  selector: 'app-detail',
  templateUrl: './teacher-detail.component.html',
  styles: []
})
export class TeacherDetailComponent implements OnInit {

  teacher = {};
  currentUser: User;

  constructor(private activatedRoute : ActivatedRoute,
              private teachersService : TeachersService,
              private authenticationService: AuthenticationService,
              private router : Router ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        console.log(id);
        this.teachersService.getById(id).subscribe(
          teacher => {this.teacher = teacher; console.log(teacher);}
        )
      }
    )
  }

  deleteAnnounce(id)
  {
    this.teachersService.delete(id).subscribe();
    this.router.navigate(['/teachers'])
  }

}

