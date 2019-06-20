import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';


import {AlertService} from '../../../shared/services/alert.service';
import {UserService} from '../../../shared/services/user-service.service';

@Component({templateUrl: './sign-up.component.html'})

export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) {
  }

  ngOnInit() {
/*    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });*/

/*      this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')],
      password: ['', [Validators.minLength(4), Validators.required]],
      phone:['', Validators.required, Validators.pattern('^[0-9]{9}$')]],
      age: []
    });*/

    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ])),
      password: new FormControl('', [Validators.minLength(4), Validators.required]),
      phone: new FormControl('', Validators.compose(
        [
          Validators.required,
          Validators.pattern('^[0-9]{9}$')])),
      birth: new FormControl('')
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}


// /*
// import { Component, OnInit } from '@angular/core';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
// import {User} from '../../_models/user';
// import {HttpClient} from '@angular/common/http';
// import {ActivatedRoute, Router} from '@angular/router';
//
// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styles: []
// })
// export class SignUpComponent implements OnInit {
//
//
//   emailid;
//   formdata;
//
//   dt;
//   res: User;
//
//   ngOnInit() {
//     this.formdata = new FormGroup({
//       name: new FormControl('', Validators.required),
//       emailid: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('[^ @]*@[^ @]*')
//       ])),
//       passwd: new FormControl('', [Validators.minLength(4), Validators.required]),
//       phone: new FormControl('', Validators.compose(
//         [
//           Validators.required,
//           Validators.pattern('^[0-9]{9}$')])),
//       age: new FormControl('')
//     });
//   }
//
//   returnUrl;
//
//   constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
//   }
// /!*
//
//   newUser : User;
//
//   onClickSubmit(data) {
//     this.emailid = data.emailid;
//     const newUser: User = {
//       name: data.name,
//       mail: data.emailid,
//       phone: data.phone,
//       password: data.passwd,
//       birth: this.dt
//     };
//
//     console.log(newUser);
//
//     // get return url from route parameters or default to '/'
//     this.returnUrl = this.route.snapshot.queryParams['init'] || 'init';
//
//
//     this.http.post<any>('http://localhost:8888/user', {
//       name: data.name,
//       mail: data.emailid,
//       password: data.passwd,
//       phone: data.phone,
//       birth: this.dt
//     }).subscribe(user => {
//       // login successful if there's a jwt token in the response
//       if (user && user.id_user) {
//         // store user details and jwt token in local storage to keep user logged in between page refreshes
//         this.router.navigate([this.returnUrl]);
//       }
//     });
//
//
//     console.log(this.res);*!/
//   }
//
// }
// */
