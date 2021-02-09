import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/services/sidenav.service';
import { onSideNavChange, animateText } from './animations'


interface Page {
  link: string;
  name: string;
}

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class LeftNavComponent implements OnInit {

  public sideNavState: boolean = true;
  public linkText: boolean = true;

  public pages: Page[] = [
    {name: 'navigation', link:'navigation'},
    {name: 'About', link:'navigation/about'},
    {name: 'Chart', link:'navigation/chart-view'},
  ]

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}
