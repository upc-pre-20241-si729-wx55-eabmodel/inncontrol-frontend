import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {RoomStateComponent} from "./public/pages/room-state/room-state.component";
import {TasksComponent} from "./public/pages/tasks/tasks.component";
import {MessagesComponent} from "./public/pages/messages/messages.component";
import {EmployeesComponent} from "./public/pages/employees/employees.component";
import {InventoryComponent} from "./public/pages/inventory/inventory.component";

const routes: Routes = [
  // {path: 'home', component: HomeComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'room-state', component: RoomStateComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'inventory', component: InventoryComponent},
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', redirectTo: 'inventory', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
