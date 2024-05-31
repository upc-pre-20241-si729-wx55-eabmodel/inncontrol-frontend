import {Component, Input} from '@angular/core';
import {PanelCardIcon} from "../../../../shared/model/panel-card-icon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-panel-card-icon',
  templateUrl: './panel-card-icon.component.html',
  styleUrl: './panel-card-icon.component.css'
})
export class PanelCardIconComponent {

  @Input() icon: PanelCardIcon
  @Input() title: string;
  @Input() toRoute: string;

  constructor(private route: Router) {
    this.icon = {} as PanelCardIcon;
    this.title = '';
    this.toRoute = '';
  }

  /**
   * Navigates to the route declared in the toRoute input
   */
  onClick() {
    this.route.navigate([this.toRoute]);
  }
}
