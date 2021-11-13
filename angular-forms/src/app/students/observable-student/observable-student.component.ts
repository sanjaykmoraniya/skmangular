import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/student.service';
import { StudentHttpService } from 'src/app/services/student-http.service';

@Component({
  selector: 'app-observable-student',
  templateUrl: './observable-student.component.html',
  styles: []
})
export class ObservableStudentComponent implements OnInit {

  students: Student[] = [];
  loading = false;

  constructor(private studentService: StudentService, private studentHttpService: StudentHttpService) { }

  ngOnInit() {
    // this.getStudentsHttp();
  }

  getStudentsHttp() {
    const studentsObservable = this.studentHttpService.getStudents();
    studentsObservable.subscribe((studentData: Student[]) => {
      this.students = studentData;
    });
  }

  getStudents(value: string) {
    const serviceType = document.getElementById('radioStudentSvcTypeLocal');
    this.loading = true;
    const studentsObservable = value === 'Http' ? this.studentHttpService.getStudents() : this.studentService.getStudents();
    studentsObservable.subscribe((studentData: Student[]) => {
      this.students = studentData;
      this.loading = false;
    });
  }

  // ngOnDestroy() {
  //   // unsubscribe to ensure no memory leaks
  //   this.subscription.unsubscribe();
  // }

}
