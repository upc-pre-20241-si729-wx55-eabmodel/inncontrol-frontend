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
import {MatNativeDateModule, MatOption} from "@angular/material/core";
import {provideNativeDateAdapter} from "@angular/material/core";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatNoDataRow,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatSelect} from "@angular/material/select";
import {InventoryContentComponent} from "./supply/inventory/components/inventory-content/inventory-content.component";
import {
  InventoryAddDialogComponent
} from "./supply/inventory/components/inventory-add-dialog/inventory-add-dialog.component";
import {
  InventoryAddItemButtonComponent
} from "./supply/inventory/components/inventory-add-item-button/inventory-add-item-button.component";
import {InventoryTableComponent} from "./supply/inventory/components/inventory-table/inventory-table.component";
import {
  TaskCreateDialogComponent
} from "./display/task/task-create/components/task-create-dialog/task-create-dialog.component";
import {ReportFormComponent} from "./interactions/report/components/report-form/report-form.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {TasksComponent} from "./public/pages/tasks/tasks.component";
import {RoomStateComponent} from "./public/pages/room-state/room-state.component";
import {MessagesComponent} from "./public/pages/messages/messages.component";
import {EmployeesComponent} from "./public/pages/employees/employees.component";
import {SearchContentComponent} from "./public/components/home/components/search-content/search-content.component";
import {
  ExpenseTableComponent
} from "./payments/expenses/expenses-tracking-component/expense-table/expense-table.component";
import {
  ExpenseAddButtonComponent
} from "./payments/expenses/expenses-tracking-component/expense-add-button/expense-add-button.component";
import {
  ExpenseAddDialogComponent
} from "./payments/expenses/expenses-tracking-component/expense-add-dialog/expense-add-dialog.component";
import {
  NotificationsCardComponent
} from "./monitoring/notifications/components/notifications-card/notifications-card.component";
import {
  ExpenseContentComponent
} from "./payments/expenses/expenses-tracking-component/expense-content/expense-content.component";
import {
  NotificationsViewComponent
} from "./monitoring/notifications/components/notifications-view/notifications-view.component";
import {
  NotificationsBadgeComponent
} from "./monitoring/notifications/components/notifications-badge/notifications-badge.component";
import {InventoryComponent} from "./public/pages/inventory/inventory.component";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDivider, MatDividerModule} from "@angular/material/divider";
import {MatBadgeModule} from "@angular/material/badge";
import { TaskContentComponent } from './display/task/task-content/task-content.component';
import {TaskTableComponent} from "./display/task/task-table/task-table.component";
import {TaskCreationComponent} from "./display/task/task-create/components/task-creation/task-creation.component";
import {
  RoomCreateDialogComponent
} from "./display/room/components/room-create-dialog/room-create-dialog.component";
import {HttpClientModule} from "@angular/common/http";
import {RoomUpdateComponent} from "./execution/components/room-management/room-update/room-update.component";
import {RoomsReportComponent} from "./display/room/components/rooms-report/rooms-report.component";
import {MatMenuModule} from "@angular/material/menu";
import { RoomCreateButtonComponent } from './display/room/components/room-create-button/room-create-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarContentComponent,
    InventoryContentComponent,
    InventoryAddDialogComponent,
    InventoryAddItemButtonComponent,
    InventoryTableComponent,
    TasksComponent,
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
    ExpenseTableComponent,
    ExpenseAddButtonComponent,
    ExpenseAddDialogComponent,
    ExpenseContentComponent,
    NotificationsCardComponent,
    NotificationsViewComponent,
    NotificationsBadgeComponent,
    InventoryComponent,
    TaskContentComponent,
    TaskTableComponent,
    TaskCreationComponent,
    RoomCreateDialogComponent,
    RoomUpdateComponent,
    RoomsReportComponent,
    RoomCreateButtonComponent
  ],
  imports: [
    HttpClientModule,
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
    MatPaginator,
    MatHeaderRow,
    MatRow,
    MatCell,
    MatHeaderCell,
    MatColumnDef,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatNoDataRow,
    MatSort,
    MatSortHeader,
    MatIcon,
    MatSelect,
    MatOption,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatDialogModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
