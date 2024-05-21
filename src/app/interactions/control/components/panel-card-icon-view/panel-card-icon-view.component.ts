import {Component, Input} from '@angular/core';
import {PanelCard} from "../../model/panel-card";
import {PanelCardIcon} from "../../model/panel-card-icon";

@Component({
  selector: 'app-panel-card-icon-view',
  templateUrl: './panel-card-icon-view.component.html',
  styleUrl: './panel-card-icon-view.component.css'
})
export class PanelCardIconViewComponent {

  @Input() title: string;
  @Input() icons: PanelCard[]

  public constructor() {
    this.title = '';
    this.icons = [];
  }
}
