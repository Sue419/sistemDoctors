import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDoctorModalComponent } from './create-doctor-modal/create-doctor-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EditDoctorModalComponent } from './edit-doctor-modal/edit-doctor-modal.component';
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar esto


@NgModule({
  declarations: [
    CreateDoctorModalComponent,
    EditDoctorModalComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
