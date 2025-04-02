// /Users/melinabehzadi/Desktop/101447858-lab-test2-comp3133/src/app/services/spacex.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../models/mission';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl);
  }

  getMissionsByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseUrl}?launch_year=${year}`);
  }

  getMissionDetails(id: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseUrl}/${id}`);
  }

  getCustomMissions(url: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(url);
  }

}


