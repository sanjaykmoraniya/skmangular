import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-forms';

  onPanelClick(e) {
    let id = e.target.getAttribute('id');
    let panelBody = document.querySelector('.' + id);
    if (panelBody.classList.contains('in')) {
      panelBody.classList.remove('in');
    }
    else {
      panelBody.classList.add('in');
    }
  }
}
