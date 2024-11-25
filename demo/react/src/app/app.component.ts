import { Component } from '@angular/core';
import breakWebPage from '@oc-2/website-breaker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  breakWebPage = breakWebPage;
}