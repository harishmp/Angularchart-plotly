import { Component, OnInit } from '@angular/core';
import { ChartViewService } from './chart-view.service';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.scss']
})
export class ChartViewComponent implements OnInit {
  countries: any = [
    {
      full: "Cell 1",
      short: "01"
    },
    {
      full: "Cell 2",
      short: "02"
    },
    {
      full: "Cell 3",
      short: "03"
    },
    {
      full: "Cell 4",
      short: "04"
    },
    {
      full: "Display All",
      short: "all"
    }
  ];
  selectedCountry: string = "01";

  // public graph = {
  //   data: [
  //       { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
  //       { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
  //   ],
  //   layout: {width: 600, height: 600, title: 'A Fancy Plot'}
  // };

  public graph = {
    data: [
        // { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [], y: [], type: 'lines' },
    ],
    layout: {title: ''}
  };

  constructor(public dataService: ChartViewService) { }

  ngOnInit(): void {
    this.callApi(this.selectedCountry);
  }

  callApi(selectedCountry) {
    this.dataService.getChartViewData().subscribe((res) => {
        let resObj = res['data'];
        console.log('resObj', resObj);
        const arr2 = resObj.filter(d => d.tid === selectedCountry);
        console.log('arr2', arr2);
        this.graph.data[0]['x'] = arr2[0].timestamps;
        this.graph.data[0]['y'] = arr2[0].values;
        this.graph.layout.title = selectedCountry;
        console.log('this.graph', this.graph)
      },
      (err) => {
        console.log("In Error Block");
        console.log(typeof err);
      }
    );
  }

  onBookChange(ob) {
    console.log('Book changed...');
    let selectedBook = ob.value;
    console.log(selectedBook);
    this.selectedCountry = selectedBook;
    this.callApi(selectedBook);
  }

}
