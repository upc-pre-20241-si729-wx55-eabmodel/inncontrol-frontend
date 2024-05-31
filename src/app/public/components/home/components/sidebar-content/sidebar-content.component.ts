import {Component} from '@angular/core';
import {PanelCard} from "../../../../../shared/model/panel-card";
import {PanelCardIcon} from "../../../../../shared/model/panel-card-icon";

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
}
