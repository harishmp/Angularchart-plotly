import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-combined-chart',
  templateUrl: './combined-chart.component.html',
  styleUrls: ['./combined-chart.component.scss']
})
export class CombinedChartComponent implements OnInit {
  @Input() graph: object;

  constructor() { }

  ngOnInit(): void {
  }

}
