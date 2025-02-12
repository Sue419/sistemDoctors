import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { MatSort, Sort } from '@angular/material/sort';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { DataUserEdit } from 'src/app/interfaces/interfaces';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { EditModalComponent } from '../../edit-modal/edit-modal.component';
import { MatPaginator } from '@angular/material/paginator';
// import { setTimeout } from 'timers/promises';


// INTERFACE PARA EL TABLE-HEAD
export interface Paciente {
  id: number,
  position: number;
  nombrePaciente: string;
  dni: number;
  telefono: string;
  fechaNacimiento: Date;
  email: string;
  Direccion: string;
  acciones: string;
}


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['nombrePaciente', 'dni', 'telefono', 'fechaNacimiento', 'email', 'Dirección', 'acciones'];
  dataSource: MatTableDataSource<Paciente>;

  showModalEdit: boolean = false;
  paciente!: Paciente;

  @ViewChild(MatSort) sort2!: MatSort;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

// F O R M  R E A C T I V O
  //form: todos los input que recolectan la Data
  form = new FormGroup({
    email: new FormControl(''),
    id: new FormControl(''),
    NombrePaciente: new FormControl(''),
    dni: new FormControl(''),
    Telefono: new FormControl(),
    Direccion: new FormControl(''),
  });
  
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private pacientesService: PacientesService,
    private dialog: MatDialog,

  ) { 
    this.dataSource = new MatTableDataSource<Paciente>([]);
  }

  ngOnInit(): void {
    // this.dataSource.sort = this.sort;
    this.consultarPacientes();
    setTimeout(() => {
      this.dataSource.sort = this.sort2;
    }, 2000);
  }
  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      // this.dataSource.paginator.initialized. = "Items por página";
      // this.dataSource.sort = this.sort;

    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

  consultarPacientes() {
    this.pacientesService.getAllPacientes().subscribe({
      next: (data: any) => {
        this.dataSource.data = data;
        console.log(this.dataSource.data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

 openModalToEditPaciente(paciente: any) {
    console.log(paciente, "paciente EDITAR PACIENTES.COMPONENT")
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '900px',
      data: { paciente }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.consultarPacientes();
      
            console.log(`Paciente ${result.paciente.IdPaciente} editado correctamente 11555`);
          // this.closeModal();
          
          })
  }

  openModalEditUser() {
    this.showModalEdit = true;
  }
  // closeModal() {
  //   this.showModalEdit = false;
  // }

  eliminarPacientePorId(paciente: any) {
    console.log(paciente, "paciente");
  
    if(paciente){
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success ms-2",
          cancelButton: "btn btn-danger me-2"
        },
        buttonsStyling: false
      });
  
      swalWithBootstrapButtons.fire({
        title: "Estás seguro?",
        text: "No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "SI, Bórralo!",
        cancelButtonText: "NO, Cancel!",
        reverseButtons: true
      }).then((result: any) => {
        if (result.isConfirmed) {
          this.pacientesService.eliminarPaciente(paciente).subscribe({
            next: (res: any) => {
              if(res){
                console.log(`Paciente ${paciente.paciente} eliminado correctamente`);
                this.consultarPacientes();
                this.swalSuccess();
              }
            },
            error: (error) => {
              console.log(`Error al eliminar el paciente ${paciente.paciente}: ${error}`);
              this.swalError(paciente.NombrePaciente, error);
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          this.swalCancelled();
        }
      });
    }else{
      console.log("Error al elminiar paciente");
    }
  }
  
private swalSuccess() {
  Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
}

private swalError(nombrePaciente: string, error: any) {
  Swal.fire({
    title: "Error",
    text: `Error al eliminar el paciente ${nombrePaciente}: ${error}`,
    icon: "error"
  });
}

private swalCancelled() {
  Swal.fire({
    title: "Cancelado!!!",
    text: "Tu archivo está seguro :)",
    icon: "error"
  });
}

}
