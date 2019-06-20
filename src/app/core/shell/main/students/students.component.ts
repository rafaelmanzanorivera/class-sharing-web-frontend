import { Component, OnInit } from '@angular/core';
import {TeachersService} from '../../../../shared/services/teachers.service';
import {Student} from '../../../_models/teachers';
import {StudentsService} from '../../../../shared/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: []
})
export class StudentsComponent implements OnInit {


  students: Student[] = [];

  constructor(private teachersService: StudentsService) {


  }


  ngOnInit() {
    this.teachersService.getAllStudents().subscribe(
      (students: Student[]) => {
        this.students = students;
      },
      (error) => {
      },
      () => {
      });
  }
}
