import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakButtonComponent } from './break-button/break-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BreakButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('website-breaker');
}