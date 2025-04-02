// /Users/melinabehzadi/Desktop/101447858-lab-test2-comp3133/src/app/app.component.ts

import { Component } from '@angular/core';
import {Router, NavigationEnd, RouterOutlet} from '@angular/router';
import { filter } from 'rxjs/operators';
import { MissionfilterComponent } from './components/missionfilter/missionfilter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MissionfilterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isDetailsPage = false;

  constructor(private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      this.isDetailsPage = e.url.includes('/mission/');
    });
  }
}
