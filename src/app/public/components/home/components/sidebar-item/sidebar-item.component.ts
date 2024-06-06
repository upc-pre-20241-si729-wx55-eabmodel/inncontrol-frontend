import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {PanelCardIcon} from "../../../../../shared/model/panel-card-icon";

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.css'
})
export class SidebarItemComponent {

  @Input() icon: PanelCardIcon
  @Input() title: string;
  @Input() toRoute: string;
  @Input() logout: boolean;

  constructor(private route: Router) {
    this.icon = {} as PanelCardIcon;
    this.title = '';
    this.toRoute = '';
    this.logout = false;
  }

  /**
   * Navigates to the route declared in the toRoute input
   */
  onClick() {
    if (this.logout) {

    } else {
      this.route.navigate([this.toRoute]);
    }
  }
}