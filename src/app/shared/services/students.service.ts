import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../core/_models/user';
import {Student, Teacher} from '../../core/_models/teachers';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  constructor(private http: HttpClient) {
  }


  getAllStudents() {
    return this.http.get('http://localhost:8888/students');
  }

  getById(id: number) {
    return this.http.get(`http://localhost:8888/students/` + id);
  }

  register(student: Student) {
    console.log(student)
    console.log(this.http.post(`http://localhost:8888/student`, student) .subscribe(response => {
      console.log(response);
      return response;
    }, err => {
      throw err;
    }));

  }

  update(student: Student) {
    return this.http.put(`http://localhost:8888/student` + student.id_student, student);
  }

  delete(id: number) {
    console.log(`http://localhost:8888/students/` + id);
    return this.http.delete(`http://localhost:8888/students/` + id);
  }

}
