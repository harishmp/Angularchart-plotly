import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  links = [
    {'name': 'My profile'},
    {'name': 'Settings'},
    {'name': 'Logout'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
