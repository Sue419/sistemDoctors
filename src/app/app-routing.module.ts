import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import HomeAdminComponent from './views/home-admin/home-admin.component';

import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [

  {
    path: '' ,//TODO: http://localhost:4200/ <--- /login
    // loadChildren: ()=> import(`./modules/home/home.module`).then(m => m.HomeModule)
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login' ,//TODO: http://localhost:4200/ <--- /login
    component:LoginComponent,
  },
  {
    path: 'home' ,//TODO: http://localhost:4200/ <--- /home
    component: HomeAdminComponent
  },
  // {
  //   path: 'dashboard' ,//TODO: http://localhost:4200/ <--- /home
  //   loadChildren: ()=> import(`./modules/dashboard/dashboard.module`).then(m => m.DashboardModule)
  // },
  {
    path: '**' ,//TODO: cualquier ruta redirijirá al home
    redirectTo: 'home' , pathMatch: 'full'
  }








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
