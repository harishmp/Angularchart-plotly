import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartViewRoutingModule } from './chart-view-routing.module';
import { ChartViewComponent } from './chart-view.component';
import { ChartComponent } from './chart/chart.component';
 
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ChartViewService } from './chart-view.service';
 
PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [ChartViewComponent, ChartComponent],
  imports: [
    CommonModule,
    ChartViewRoutingModule,
    PlotlyModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ChartViewService]
})
export class ChartViewModule { }
