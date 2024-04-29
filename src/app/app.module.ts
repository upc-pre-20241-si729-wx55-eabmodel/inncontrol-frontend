import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarContentComponent } from './public/components/home/components/toolbar-content/toolbar-content.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButtonModule} from '@angular/material/button';
import { HomeContentComponent } from './public/components/home/components/home-content/home-content.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerInput} from "@angular/material/datepicker";
import {MatDatepickerToggle} from "@angular/material/datepicker";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOption} from "@angular/material/core";
import {provideNativeDateAdapter} from "@angular/material/core";
import {TaskCreator} from "./planning/components/task-creation/components/task-creation.component";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TaskViewComponent } from './planning/page/task-view/task-view.component';
import { TaskCreateDialogComponent } from './display/components/task-create-dialog/task-create-dialog/task-create-dialog.component';
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
import {MatIcon} from "@angular/material/icon";
import {MatSelect} from "@angular/material/select";
import {
  NotificationsCardComponent
} from './monitoring/notifications/components/notifications-card/notifications-card.component';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {
  NotificationsViewComponent
} from './monitoring/notifications/components/notifications-view/notifications-view.component';
import {
  NotificationsBadgeComponent
} from './monitoring/notifications/components/notifications-badge/notifications-badge.component';
import {MatBadge} from "@angular/material/badge";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatDivider} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarContentComponent,
    HomeContentComponent,
    TaskCreator,
    TaskViewComponent,
    TaskCreateDialogComponent
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
    MatProgressBar,
    MatDivider,
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()

  ],
  bootstrap: [AppComponent]


})
export class AppModule {
}
