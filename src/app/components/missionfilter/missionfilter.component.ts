// /Users/melinabehzadi/Desktop/101447858-lab-test2-comp3133/src/app/components/missionfilter/missionfilter.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.scss']
})
export class MissionfilterComponent {
  year: string = '';
  allMissions: Mission[] = [];
  filteredMissions: Mission[] = [];

  constructor(private spacexService: SpacexService) {
    this.loadAll();
  }

  loadAll(): void {
    this.spacexService.getAllMissions().subscribe((data) => {
      this.allMissions = data;
      this.filteredMissions = data;
    });
  }

  search(): void {
    if (this.year.trim()) {
      this.spacexService.getMissionsByYear(this.year).subscribe((data) => {
        this.filteredMissions = data;
      });
    }
  }

  reset(): void {
    this.year = '';
    this.filteredMissions = this.allMissions;
  }
}
