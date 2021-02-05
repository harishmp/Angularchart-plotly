import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartViewService {

  constructor(private http: HttpClient) { }

  getChartViewData() {
    return this.http.get('../../../assets/json/sensor-measurements.json');
  };

}
