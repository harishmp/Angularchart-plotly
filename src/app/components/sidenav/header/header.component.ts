import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  links = [
    {'name': 'My profile', 'icon': 'person'},
    {'name': 'Settings', 'icon': 'settings'},
    {'name': 'Logout', 'icon': 'power_settings_new'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
