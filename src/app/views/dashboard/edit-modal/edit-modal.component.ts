import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';
import { DialogData } from 'src/app/interfaces/interfaces';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  // data: any; // define data property to hold the passed object


  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private pacientesService: PacientesService
   
  ) {}


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

form = new FormGroup({
  // email: new FormControl(this.data.paciente.email),
  id: new FormControl(this.data.paciente.id),
  NombrePaciente: new FormControl(this.data.paciente.NombrePaciente),
  dni: new FormControl(this.data.paciente.dni),
  Telefono: new FormControl(this.data.paciente.Telefono),
  Direccion: new FormControl(this.data.paciente.Direccion),
});












editarPaciente(paciente: any) {
  console.log(paciente, "paciente")
  const dialogRef = this.dialog.open(EditModalComponent, {
    width: '900px',
    data: { paciente }
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      this.pacientesService.editarPaciente(paciente).subscribe({
        next: (data: any) => {
          console.log(data);
          console.log(`Paciente ${paciente.id} editado correctamente`);
          // this.consultarPacientes();

        },
        error: (error) => {
          console.log(`Error al editar el paciente ${paciente.id}: ${error}`);
        }
      });
    }
  });
}
onClick(): void {
  this.dialogRef.close();
}
}