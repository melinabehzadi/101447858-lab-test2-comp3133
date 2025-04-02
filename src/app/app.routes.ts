// /Users/melinabehzadi/Desktop/101447858-lab-test2-comp3133/src/app/app.routes.ts

// /app/app.routes.ts

import { Routes } from '@angular/router';
import { MissionfilterComponent } from './components/missionfilter/missionfilter.component';
import { MissiondetailsComponent } from './components/missiondetails/missiondetails.component';

export const routes: Routes = [
  { path: '', component: MissionfilterComponent },
  { path: 'mission/:id', component: MissiondetailsComponent },
];
