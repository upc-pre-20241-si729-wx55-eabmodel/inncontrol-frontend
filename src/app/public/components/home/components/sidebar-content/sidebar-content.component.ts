import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import {Component} from '@angular/core';
import {PanelCard} from "../../../../../shared/model/panel-card";
import {PanelCardIcon} from "../../../../../shared/model/panel-card-icon";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrl: './sidebar-content.component.css'
})
export class SidebarContentComponent {

  items: PanelCard[] = [
    new PanelCard('Profile', PanelCardIcon.Profile, '/profile'),
    new PanelCard('Tasks', PanelCardIcon.Tasks, '/tasks'),
    new PanelCard('Rooms', PanelCardIcon.Rooms, '/rooms'),
    new PanelCard('Inventory', PanelCardIcon.Inventory, '/inventory'),
    new PanelCard('Employees', PanelCardIcon.Employees, '/employees'),
    new PanelCard('Messages', PanelCardIcon.Messages, '/messages'),
  ]

  logout() {

  }

  protected readonly PanelCardIcon = PanelCardIcon;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
