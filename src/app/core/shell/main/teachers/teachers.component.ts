import { Component, OnInit } from '@angular/core';
import {TeachersService} from '../../../../shared/services/teachers.service';
import {Teacher} from '../../../_models/teachers';
import {CardComponent} from '../card/card.component';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styles: []
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[] = [];
  cards: CardComponent[] = [];

  constructor(private teachersService: TeachersService) {


  }


  ngOnInit() {
    this.teachersService.getAllTeachers().subscribe(
      (teachers: Teacher[]) => {
        this.teachers = teachers;
      },
      (error) => {
      },
      () => {
      });


  }
}
