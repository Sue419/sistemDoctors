import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';
import { DialogData } from 'src/app/interfaces/interfaces';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  formulario2!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pacientesService: PacientesService,
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit(): void {
    console.log("data: ", this.data);
    
    this.formulario2 = this.formBuilder.group({
      id: [this.data.paciente.IdPaciente, Validators.required],
      NombrePaciente: [this.data.paciente.paciente, Validators.required],
      dni: [this.data.paciente.NumeroDocumento, [Validators.required, ]],
      Telefono: [this.data.paciente.Num_Cel, [Validators.required, ]],
      Email: [this.data.paciente.Email, [Validators.required, Validators.email]],
      Direccion: [this.data.paciente.Domicilio, Validators.required],
    });
  }


// editarPaciente(paciente: any): void {
//   this.pacientesService.editarPaciente(this.data.paciente).subscribe({
//     next: (data: any) => {
//       console.log(data);
//       console.log(`Paciente ${this.data.paciente.id} editado correctamente`);
//       this.dialogRef.close();
//     },
//     error: (error) => {
//       console.log(`Error al editar el paciente ${this.data.paciente.id}: ${error}`);
//     }
//   });
// }

// form = new FormGroup({
 
//   id: new FormControl(this.data.paciente.id),
//   NombrePaciente: new FormControl(this.data.paciente.NombrePaciente),
//   dni: new FormControl(this.data.paciente.dni),
//   Telefono: new FormControl(this.data.paciente.Telefono),
//   Email: new FormControl(this.data.paciente.Email),
//   Direccion: new FormControl(this.data.paciente.Direccion),
// });

// x si truena llega en el ngOnINI... 48 A LA 53 Y ME LLLEVO AL NG ONinit

editarPaciente() {
  console.log("paciente: ", this.formulario2.value )

  this.pacientesService.editarPaciente(this.formulario2.value).subscribe({
    next: (data: any) => {
      console.log(data);
      // console.log(`Paciente ${paciente.id} editado correctamente`);
      // this.consultarPacientes();

    },
    error: (error) => {
      // console.log(`Error al editar el paciente ${paciente.IdPaciente}: ${error}`);
    }
  });

}
onClick(): void {
  this.dialogRef.close();
}
}