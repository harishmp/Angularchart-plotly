import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BatteryModule } from './typed';

const _url = '../../../assets/json/sensor-measurements.json';

@Injectable({
  providedIn: 'root'
})
export class ChartViewService {

  constructor(private http: HttpClient) { }

  getChartViewData(): Observable<{data: BatteryModule[]}> {
    return this.http.get<{data: BatteryModule[]}>(_url);
  }

}
