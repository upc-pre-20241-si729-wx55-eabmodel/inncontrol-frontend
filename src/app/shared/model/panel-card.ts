import {PanelCardIcon} from "./panel-card-icon";

export class PanelCard {
  title: string;
  icon: PanelCardIcon;
  toRoute: string;
  constructor(title: string, icon: PanelCardIcon, toRoute: string) {
    this.title = title;
    this.icon = icon;
    this.toRoute = toRoute;
  }
}
