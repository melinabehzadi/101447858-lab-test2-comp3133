// /Users/melinabehzadi/Desktop/101447858-lab-test2-comp3133/src/app/components/missiondetails/missiondetails.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss']
})
export class MissiondetailsComponent implements OnInit {
  mission!: Mission;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spacexService: SpacexService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.spacexService.getMissionDetails(id).subscribe((data) => {
      this.mission = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
