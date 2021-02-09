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
    {'name': 'I think i have misunderstood the routing to include the Navigation page and two subpages as “About” and “Chart”'},
    {'name': 'I had few questions on routing explained and UI given is not having the consistency of padding and thought of asking in the next interview call.'},
    {'name': 'However, I have made few changes in the UI and routing.'},
    {'name': 'I request you to reconsider my profile.'},
    {'name': 'Thank you for your time.'},
    {'name': 'Looking forward to hearing from you.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
