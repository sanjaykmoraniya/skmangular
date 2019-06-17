import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [{
    Id: 1,
    Name: 'Krunal',
    EnrollmentNumber: 110470116021,
    College: 'VVP Engineering College',
    University: 'GTU'
  },
  {
    Id: 2,
    Name: 'Rushabh',
    EnrollmentNumber: 110470116023,
    College: 'VVP Engineering College',
    University: 'GTU'
  },
  {
    Id: 3,
    Name: 'Ankit',
    EnrollmentNumber: 110470116022,
    College: 'VVP Engineering College',
    University: 'GTU'
  },
  {
    Id: 4,
    Name: 'Vijay',
    EnrollmentNumber: 110470116024,
    College: 'Engineering College',
    University: 'BTU'
  }];

  constructor() { }

  /**
   * Get students
   */
  public getStudents(): any {
    const studentObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.students);
      }, 1000);
    });

    return studentObservable;
  }
}
