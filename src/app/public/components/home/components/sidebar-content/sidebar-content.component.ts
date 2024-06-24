import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component} from '@angular/core';
import {PanelCard} from "../../../../../shared/model/panel/panel-card";
import {PanelCardIcon} from "../../../../../shared/model/panel/panel-card-icon";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../../../iam/services/authentication.service";

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
    this.iamService.signOut();
  }

  protected readonly PanelCardIcon = PanelCardIcon;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  protected isLogged: boolean = false;
  private currentUsername: string = '';

  constructor(
    private breakpointObserver: BreakpointObserver,
    protected iamService: AuthenticationService,
    private router: Router
  ) {

    iamService.isSignedIn.subscribe(value => {
      this.isLogged = value;
    });
    iamService.currentUserName.subscribe(value => {
      this.currentUsername = value;
    });
  }

  sendToRoute(toRoute: string) {
    if (toRoute === '/logout') {
      this.logout();
    } else if (toRoute.includes('profile')) {
      this.router.navigate([toRoute, this.currentUsername]);
    } else {
      this.router.navigate([toRoute]);
    }
  }
}
