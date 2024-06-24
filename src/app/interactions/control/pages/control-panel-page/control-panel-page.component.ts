import {Component} from '@angular/core';
import {PanelCard} from "../../../../shared/model/panel/panel-card";
import {PanelCardIcon} from "../../../../shared/model/panel/panel-card-icon";

@Component({
  selector: 'app-control-panel-page',
  templateUrl: './control-panel-page.component.html',
  styleUrl: './control-panel-page.component.css'
})
export class ControlPanelPageComponent {

  controlPanelCards: PanelCard[];
  managePanelCards: PanelCard[];

  constructor() {
    this.controlPanelCards = [
      new PanelCard('Tasks', PanelCardIcon.Tasks, '/tasks'),
      new PanelCard('Rooms', PanelCardIcon.Rooms, '/rooms'),
      new PanelCard('Inventory', PanelCardIcon.Inventory, '/inventory'),
    ];
    this.managePanelCards = [
      new PanelCard('Employees', PanelCardIcon.Employees, '/employees'),
      new PanelCard('Messages', PanelCardIcon.Messages, '/messages'),
      new PanelCard('Profile', PanelCardIcon.Profile, '/profile'),
    ];
  }
}
