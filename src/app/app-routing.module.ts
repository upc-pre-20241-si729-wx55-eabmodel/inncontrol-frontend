import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {RoomStateComponent} from "./public/pages/room-state/room-state.component";
import {TasksComponent} from "./public/pages/tasks/tasks.component";
import {MessagesComponent} from "./public/pages/messages/messages.component";
import {EmployeesComponent} from "./public/pages/employees/employees.component";
import {InventoryComponent} from "./public/pages/inventory/inventory.component";
import {LoginComponent} from "./iam/pages/login/login.component";
import {SigUpComponent} from "./iam/pages/sig-up/sig-up.component";
import {
  UserProfileContentComponent
} from "./display/user-view/pages/user-profile-content/user-profile-content.component";
import {ControlPanelPageComponent} from "./interactions/control/pages/control-panel-page/control-panel-page.component";
import {SchedulePageComponent} from "./planning/schedule/pages/schedule-page/schedule-page.component";
import {AuthGuard, LoggedInAuthGuard} from "./shared/services/authguard";

const routes: Routes = [
  // {path: 'home', component: HomeComponent},
  {path: 'schedule', component: SchedulePageComponent, canActivate: [AuthGuard]},
  {path: 'control', component: ControlPanelPageComponent , canActivate: [AuthGuard]},
  {path: 'tasks', component: TasksComponent , canActivate: [AuthGuard]},
  {path: 'rooms', component: RoomStateComponent , canActivate: [AuthGuard]},
  {path: 'messages', component: MessagesComponent , canActivate: [AuthGuard]},
  {path: 'employees', component: EmployeesComponent , canActivate: [AuthGuard]},
  {path: 'inventory', component: InventoryComponent , canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'register', component: SigUpComponent , canActivate: [LoggedInAuthGuard]},
  {path: 'profile', component: UserProfileContentComponent , canActivate: [AuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
