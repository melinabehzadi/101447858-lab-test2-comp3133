// /Users/melinabehzadi/Desktop/101447858-lab-test2-comp3133/src/app/components/missionlist/missionlist.component.ts

// /components/missionlist/missionlist.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission';
import { RouterModule, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spacexService: SpacexService, private router: Router) {}

  ngOnInit(): void {
    this.spacexService.getAllMissions().subscribe((data) => {
      this.missions = data;
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/mission', id]);
  }
}
