import { Component } from '@angular/core';
import breakWebPage from '2.0-Website-Breaker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  breakWebPage = breakWebPage;
}