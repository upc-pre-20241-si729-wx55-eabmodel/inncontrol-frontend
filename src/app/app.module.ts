import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarContentComponent} from './public/components/home/components/toolbar-content/toolbar-content.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButtonModule} from '@angular/material/button';
import {HomeContentComponent} from './public/components/home/components/home-content/home-content.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerInput} from "@angular/material/datepicker";
import {MatDatepickerToggle} from "@angular/material/datepicker";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {provideNativeDateAdapter} from "@angular/material/core";

import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InventoryContentComponent} from "./inventory/components/inventory-content/inventory-content.component";
import {InventoryAddDialogComponent} from './inventory/components/inventory-add-dialog/inventory-add-dialog.component';
import {
  InventoryAddItemButtonComponent
} from './inventory/components/inventory-add-item-button/inventory-add-item-button.component';
import {InventoryTableComponent} from './inventory/components/inventory-table/inventory-table.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule, provideNativeDateAdapter} from "@angular/material/core";
import {TaskCreator} from "./planning/components/task-creation/components/task-creation.component";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {SearchContentComponent} from "./public/components/home/components/search-content/search-content.component";
import {EmployeesComponent} from "./public/pages/employees/employees.component";
import {MessagesComponent} from "./public/pages/messages/messages.component";
import {RoomStateComponent} from "./public/pages/room-state/room-state.component";
import {TasksComponent} from "./public/pages/tasks/tasks.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {InventoryContentComponent} from "./inventory/components/inventory-content/inventory-content.component";
import {ReportFormComponent} from "./interactions/report/components/report-form/report-form.component";
@NgModule({
  declarations: [
    AppComponent,
    ToolbarContentComponent,
    HomeContentComponent,
    InventoryContentComponent,
    InventoryAddDialogComponent,
    InventoryAddItemButtonComponent,
    InventoryTableComponent
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
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,
    MatDialogTitle,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatSort,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatNoDataRow,
    MatRowDef,
    MatPaginator,
    MatHeaderRowDef,
    MatSortHeader
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
