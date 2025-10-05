import { Component } from '@angular/core';

@Component({
  selector: 'app-break-button',
  standalone: true,
  imports: [],
  templateUrl: './break-button.html',
  styleUrl: './break-button.scss'
})
export class BreakButtonComponent {
  async breakSite() {
      // Lazy-load the browser-only module
      const { default: breakWebPage } = await import('@oc-2/website-breaker');
      breakWebPage();
  }
}