import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EngineerComponent } from './engineer/engineer.component';
import { ScientistComponent } from './scientist/scientist.component';
import { MapComponent } from './map/map.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ReminderComponent } from './reminder/reminder.component';


const routes: Routes = [
 { path: '', component: StartPageComponent}, 
  { path:'home',component: HomeComponent,
children:[
  {path: 'doc', component:DoctorComponent},
  {path: 'eng', component:EngineerComponent},
  {path: 'sci', component:ScientistComponent},
 {path:'map', component: MapComponent},
 {path:'app', component: AppointmentComponent},
 {path:'rem', component: ReminderComponent},
 {path:'rem', redirectTo: 'rem', pathMatch:'full' }
 



]
},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
