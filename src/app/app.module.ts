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
import {MatNativeDateModule} from "@angular/material/core";
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

// @ts-ignore

@NgModule({
  declarations: [
    AppComponent,
    ToolbarContentComponent,
    HomeContentComponent,
    TaskCreator,
    TaskViewComponent,
    TaskCreateDialogComponent
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
    MatSortHeader

  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
