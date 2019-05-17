import { Component } from '@angular/core';
import { QuestionService } from './reactive-forms/dynamic-forms/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [QuestionService]
})
export class AppComponent {
  title = 'angular-forms';
  questions: any[];

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
