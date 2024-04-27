import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarContentComponent} from './public/components/home/components/toolbar-content/toolbar-content.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButtonModule} from '@angular/material/button';
import {ReportFormComponent} from './interactions/report/components/report-form/report-form.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {InventoryContentComponent} from './inventory/components/inventory-content/inventory-content.component';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {TasksComponent} from './public/pages/tasks/tasks.component';
import {RoomStateComponent} from './public/pages/room-state/room-state.component';
import {MessagesComponent} from './public/pages/messages/messages.component';
import {EmployeesComponent} from './public/pages/employees/employees.component';
import {SearchContentComponent} from './public/components/home/components/search-content/search-content.component';
import {MatIconModule} from "@angular/material/icon";
import {
  NotificationsCardComponent
} from './monitoring/notifications/components/notifications-card/notifications-card.component';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import { NotificationsViewComponent } from './monitoring/notifications/components/notifications-view/notifications-view.component';
import { NotificationsBadgeComponent } from './monitoring/notifications/components/notifications-badge/notifications-badge.component';
import {MatBadge} from "@angular/material/badge";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarContentComponent,
    ReportFormComponent,
    InventoryContentComponent,
    HomeComponent,
    PageNotFoundComponent,
    TasksComponent,
    RoomStateComponent,
    MessagesComponent,
    EmployeesComponent,
    SearchContentComponent,
    NotificationsCardComponent,
    NotificationsViewComponent,
    NotificationsBadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbar,
    MatButtonModule,
    MatFormFieldModule,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    MatInput,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatBadge,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
