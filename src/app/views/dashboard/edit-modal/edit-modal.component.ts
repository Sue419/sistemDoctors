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
    console.log("data NGONINIT: ", this.data);
    
    this.formulario2 = this.formBuilder.group({
      id: [this.data.paciente.IdPaciente, Validators.required],
      NombrePaciente: [this.data.paciente.paciente, Validators.required],
      dni: [this.data.paciente.NumeroDocumento, [Validators.required, ]],
      Telefono: [this.data.paciente.Num_Cel, [Validators.required, ]],
      Email: [this.data.paciente.Email, [Validators.required, Validators.email]],
      Direccion: [this.data.paciente.Domicilio, Validators.required],
    });
  }



editarPaciente() {
  console.log("paciente: ", this.formulario2.value )
  console.log(" EDITAR EDITMODALCOMPONENT")
  this.pacientesService.editarPaciente(this.formulario2.value).subscribe({
    next: (data: any) => {
      console.log(data);
      this.onClick();
      console.log(`Paciente ${this.formulario2.value.id} editado correctamente`);
      this.pacientesService.getAllPacientes().subscribe({
        next: (datos:any)=>{
        console.log(datos, "datos");
        
      },
       error: (error) => {
        console.log(error);
      }
      
    });

  },
    error: (error) => {
      console.log(`Error al editar el paciente ${this.formulario2.value.id}: ${error}`);
    }
  });

}
onClick(): void {
  this.dialogRef.close();
}
}