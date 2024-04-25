import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarContentComponent } from './public/components/home/components/toolbar-content/toolbar-content.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButtonModule} from '@angular/material/button';
import { HomeContentComponent } from './public/components/home/components/home-content/home-content.component';
import { ReportFormComponentComponent } from './interactions/report/components/report-form.component/report-form.component.component';
import { ReportFormComponent } from './interactions/report/components/report-form/report-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarContentComponent,
    HomeContentComponent,
    ReportFormComponentComponent,
    ReportFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
