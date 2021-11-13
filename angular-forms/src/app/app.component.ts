import { Component } from '@angular/core';
import { QuestionService } from './reactive-forms/dynamic-forms/question.service';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [QuestionService]
})
export class AppComponent {
  title = 'angular-forms';
  questions: any[];

  /**
   * An observable of current DateTime string. It renders asynchronously in web page.
   */
  time$ = interval(1000).pipe(map(_ => new Date().toString()));

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

  onPanelClick(e) {
    const id = e.target.getAttribute('id');
    const panelBody = document.querySelector('.' + id);
    if (panelBody.classList.contains('in')) {
      panelBody.classList.remove('in');
    } else {
      panelBody.classList.add('in');
    }
  }
}
