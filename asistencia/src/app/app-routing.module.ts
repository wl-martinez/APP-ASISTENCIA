import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { LoginComponent } from './pages/login/login.component';
import { RestoreComponent } from './pages/restore/restore.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'attendance',
    component: AttendanceComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'restore',
    component: RestoreComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
