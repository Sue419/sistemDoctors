import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';
import { EditModalComponent } from '../../edit-modal/edit-modal.component';
import { DeleteModalComponent } from '../../delete-modal/delete-modal.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

export interface Paciente {
  position: number;
  nombrePaciente: string;
  dni: number;
  telefono: string;
  Direccion: string;
  acciones: string;
}


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements AfterViewInit, OnInit{

  displayedColumns:string[] = ['position', 'nombrePaciente', 'dni', 'telefono', 'Dirección','acciones'];
  dataSource = new MatTableDataSource<Paciente>();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private pacientesService: PacientesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.consultarPacientes();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

    announceSortChange(sortState:Sort): void {
      const direction = sortState.direction ? `${sortState.direction}ending` : 'cleared';
      this._liveAnnouncer.announce(`Sorted ${direction}`);
  }
  

  consultarPacientes(){
    this.pacientesService.getAllPacientes().subscribe({
      next: (data:any) => {
        this.dataSource.data = data;
        console.log(this.dataSource.data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  editarPaciente(paciente: Paciente) {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '800px',
      data: { paciente }
    });
  
    dialogRef.afterClosed().subscribe((result:any) => {
      if (result) {
        this.pacientesService.editarPaciente(paciente).subscribe({
          next: (data: any) => {
            console.log(data);
            console.log(`Paciente ${paciente.nombrePaciente} editado correctamente`);
            this.consultarPacientes();
            
          },
          error: (error) => {
            console.log(`Error al editar el paciente ${paciente.nombrePaciente}: ${error}`);
          }
        });
      }
    });
  }

  eliminarPaciente(paciente: Paciente) {
    // const dialogRef = this.dialog.open(DeleteModalComponent, {
    //   width: '800px',
    //   data: { paciente }
    // }
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true

    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Yes, delete it!"
        this.pacientesService.eliminarPaciente().subscribe({
          next: (data: any) => {
            console.log(`Paciente ${paciente.nombrePaciente} eliminado correctamente`);
            this.consultarPacientes();

            this.swalSuccess();
          

      }, 
      error: (error) => {
        console.log(`Error al eliminar el paciente ${paciente.nombrePaciente}: ${error}`);
        // Handle error with a SweetAlert here
   this.swalError(paciente.nombrePaciente, error)
      }
    });
  } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel) {
           // User clicked "No, cancel!"
          this.swalCancelled();
      }
    }); 
  }  

// Helper methods for handling SweetAlerts
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
    title: "Cancelled",
    text: "Your imaginary file is safe :)",
    icon: "error"
  });
}

}


