import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

export interface Paciente {
  position: number;
  nombrePaciente: string;
  dni: number;
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
    private pacientesService: PacientesService
  ) { }

  ngOnInit(): void {
    this.consultarPacientes();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

    announceSortChange(sortState: Sort): void {
      const direction = sortState.direction ? `${sortState.direction}ending` : 'cleared';
      this._liveAnnouncer.announce(`Sorted ${direction}`);
  }
  

  consultarPacientes(){
    this.pacientesService.getAllPacientes().subscribe({
      next: (data:any) => {
        // this.pacientes = data;
        this.dataSource.data = data;
        console.log(this.dataSource.data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  editarPaciente(medico:any){
    //aqui el metodo para editar por tip_docum y cod_docum

    //Me decias que te pasaron el esquema o la conexión siiiiii :)
  }

  eliminarPaciente(medico:any){
    //aqui el metodo para elikminar por tip_docum y cod_docum
  }
}


