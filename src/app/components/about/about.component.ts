import { Component, OnInit } from '@angular/core';

interface list {
  name: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  codingChallenge: Array<list> = [
    {'name': 'THE CHALLENGES OF THE CODING CHALLENGE'},
    {'name': 'To start with, I would like to appriciate the way the task is explained and shared files were helpfull to achieve the task.'},
    {'name': 'From a technical point of view, I did not face any perticular challenge as I have experience working on the similar features such as Git, Angular Material, Navigation, and Obervables before.'},
  ]

  timeAssessment: Array<list> = [
    {'name': 'Understaing the task - 20mns'},
    {'name': 'To create a layout(with header and sidebar and router) - 1 hour'},
    {'name': 'About component, and Chart component with Service integration - 3 hours'},
    {'name': 'Total Coding - 4 Hours'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
