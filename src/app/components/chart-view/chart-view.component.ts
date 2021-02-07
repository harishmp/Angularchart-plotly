import { Component, OnInit } from '@angular/core';
import { ChartViewService } from './chart-view.service';
import { cellList, BatteryModule } from './typed';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.scss']
})
export class ChartViewComponent implements OnInit {

  cellList: Array<cellList> = [
    { name: "Cell 1", value: "01" },
    { name: "Cell 2", value: "02" },
    { name: "Cell 3", value: "03" },
    { name: "Cell 4", value: "04" }
  ];
  
  selectedBatterymodule: object = {value: "01"};

  displayAllbatterymodule: Array<string> = [];

  enableView: boolean = false;
  switchComponents: boolean = true;

  dataResult = new Array<BatteryModule>();

  private graph = { data: [], layout: {title: '', xaxis: {title: ''}, yaxis: {title: ''}}, name: '' }; 

  constructor(private dataService: ChartViewService) { }

  ngOnInit(): void {
    this.callApi(this.selectedBatterymodule);
  }

  callApi(selectedBatterymodule: object) {
    this.dataService.getChartViewData().subscribe(response => {
      this.dataResult = response.data.map(item => {
        return new BatteryModule( 
          item.tid,
          item.timestamps,
          item.values
        )
      });
      this.dataResult.forEach(element => this.displayAllbatterymodule.push(element.tid));
      this.onChangebatterymodule(selectedBatterymodule);
      }, (err) => console.log("In Error Block" + err)
    );
  }

  onChangebatterymodule(selectedBatterymodule) {
    this.resetGraph();
    if(selectedBatterymodule.value == "all") {
      this.graph.layout.title = 'Sensors information for all the battery modules';
      this.switchComponents = false;
      for(let i=0; i<this.displayAllbatterymodule.length; i++) this.pushdatatoGraph(this.dataResult, i, this.displayAllbatterymodule[i]);
    } else {
      this.graph.layout.title = 'Sensors information for the battery module : ' + selectedBatterymodule.value;
      this.enableView = true;
      this.switchComponents = true;
      this.pushdatatoGraph(this.dataResult, 0, selectedBatterymodule.value);
    }
  }

  pushdatatoGraph(response, i, selectedBatterymodule) {
    const filterResponse = response.filter(d => d.tid === selectedBatterymodule);
    const data: BatteryModule = filterResponse[0];
    this.graph.data.push({ x: [], y: [], type: 'scatter', name: '' });
    this.graph.data[i]['name'] = 'Module ' + selectedBatterymodule;
    this.graph.data[i]['x'] = data.timestamps;
    this.graph.data[i]['y'] = data.values;
  }

  resetGraph() { this.graph = {data: [], layout: {title: '', xaxis: {title: 'Time'}, yaxis: {title: 'Temperature'}}, name: ''} }

}
