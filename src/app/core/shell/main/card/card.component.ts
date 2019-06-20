import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

  @Input() person;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onDetailClick()
  {
    //this.router.navigate(['/login']);
    console.log(this.person);
    if(this.router.url === '/teachers')
    {

      console.log(this.person.id_teacher)

      let route = '/teachers/' + this.person.id_teacher;

      console.log(route);

      this.router.navigate([route]);
    }

    if(this.router.url === '/students')
    {

      console.log(this.person.id_student)

      let route = '/students/' + this.person.id_student;

      console.log(route);

      this.router.navigate([route]);
    }
  }
}
