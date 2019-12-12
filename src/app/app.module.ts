import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EngineerComponent } from './engineer/engineer.component';
import { ScientistComponent } from './scientist/scientist.component';
import { MapComponent } from './map/map.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ReminderComponent } from './reminder/reminder.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HomeComponent,
    DoctorComponent,
    EngineerComponent,
    ScientistComponent,
    MapComponent,
    AppointmentComponent,
    ReminderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
