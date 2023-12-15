import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';


import HomeAdminComponent from './views/home-admin/home-admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RouterModule } from '@angular/router';
import { sharedModule } from './shared/shadedModule';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './views/dashboard/side-nav/side-nav.component';
import { CreaPacienteComponent } from './views/dashboard/creaPaciente/crea-paciente/crea-paciente.component';
import { DatosPacienteComponent } from './views/dashboard/datosPaciente/datos-paciente/datos-paciente.component';
import { PacientesComponent } from './views/dashboard/Pacientes/pacientes/pacientes.component';
import { NuevoHistorialComponent } from './views/dashboard/NuevoHistorial/nuevo-historial/nuevo-historial.component';
import { HistorialComponent } from './views/dashboard/Historial/historial/historial.component';
import { DoctoresComponent } from './views/dashboard/doctores/doctores.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeAdminComponent,
    DashboardComponent,
    SideNavComponent,
    CreaPacienteComponent,
    DatosPacienteComponent,
    PacientesComponent,
    NuevoHistorialComponent,
    HistorialComponent,
    DoctoresComponent,
  ],
  imports: [
    sharedModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    MatDatepickerModule,
    // MatNativeDateModule,
    // ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}