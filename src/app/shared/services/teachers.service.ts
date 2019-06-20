import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../core/_models/user';
import {Teacher} from '../../core/_models/teachers';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {


  constructor(private http: HttpClient) {
  }


  getAllTeachers() {
    // return this.persons;
    return this.http.get('http://localhost:8888/teachers');
  }

  getById(id: number) {
    console.log(`http://localhost:8888/teachers` + id);
    return this.http.get(`http://localhost:8888/teachers/` + id);
  }

  register(teacher: Teacher) {
    console.log(this.http.post(`http://localhost:8888/teacher`, teacher).subscribe());
  }

  update(teacher: Teacher) {
    return this.http.put(`http://localhost:8888/teacher` + teacher.id_teacher, teacher);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8888/teachers/` + id);
  }

}
