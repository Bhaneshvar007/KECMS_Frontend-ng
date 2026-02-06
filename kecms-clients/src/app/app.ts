import { Component, signal } from '@angular/core';
import { Header } from './module/header/header';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('kecms-clients');

  showHeader = signal(true);

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.showHeader.set(event.urlAfterRedirects !== '/login');
      }
    });

  }
}
