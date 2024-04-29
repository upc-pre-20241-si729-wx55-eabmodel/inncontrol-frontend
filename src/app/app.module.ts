import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarContentComponent} from './public/components/home/components/toolbar-content/toolbar-content.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerInput} from "@angular/material/datepicker";
import {MatDatepickerToggle} from "@angular/material/datepicker";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {provideNativeDateAdapter} from "@angular/material/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";
import {TaskCreator} from "./planning/components/task-creation/components/task-creation.component";
import {TaskViewComponent} from './planning/page/task-view/task-view.component';
import {
  TaskCreateDialogComponent
} from './display/components/task-create-dialog/task-create-dialog/task-create-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import {
  NotificationsCardComponent
} from './monitoring/notifications/components/notifications-card/notifications-card.component';
import {
  NotificationsViewComponent
} from './monitoring/notifications/components/notifications-view/notifications-view.component';
import {
  NotificationsBadgeComponent
} from './monitoring/notifications/components/notifications-badge/notifications-badge.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {SearchContentComponent} from "./public/components/home/components/search-content/search-content.component";
import {EmployeesComponent} from "./public/pages/employees/employees.component";
import {MessagesComponent} from "./public/pages/messages/messages.component";
import {RoomStateComponent} from "./public/pages/room-state/room-state.component";
import {TasksComponent} from "./public/pages/tasks/tasks.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {ReportFormComponent} from "./interactions/report/components/report-form/report-form.component";
import {InventoryContentComponent} from "./supply/inventory/components/inventory-content/inventory-content.component";
import {
  InventoryAddDialogComponent
} from "./supply/inventory/components/inventory-add-dialog/inventory-add-dialog.component";
import {
  InventoryAddItemButtonComponent
} from "./supply/inventory/components/inventory-add-item-button/inventory-add-item-button.component";
import {InventoryTableComponent} from "./supply/inventory/components/inventory-table/inventory-table.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarContentComponent,
    InventoryContentComponent,
    InventoryAddDialogComponent,
    InventoryAddItemButtonComponent,
    InventoryTableComponent,
    TaskCreator,
    TaskViewComponent,
    TaskCreateDialogComponent,
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
    MatToolbar,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatDividerModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]


})
export class AppModule {
}
