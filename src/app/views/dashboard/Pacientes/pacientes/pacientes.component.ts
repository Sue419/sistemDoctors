import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';



@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements AfterViewInit{

  displayedColumns: string[] = ['position', 'nombrePaciente', 'dni', 'symbol'];
  dataSource = new MatTableDataSource<PacientesList>(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }





  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort): void {
    const direction = sortState.direction ? `${sortState.direction}ending` : 'cleared';
    this._liveAnnouncer.announce(`Sorted ${direction}`);
}

constructor(private _liveAnnouncer: LiveAnnouncer) {}


}




// interfaz
export interface PacientesList {
  nombrePaciente: string;
  position: number;
  dni: number;
  symbol: string;
}
const ELEMENT_DATA: PacientesList[] = [
  {position: 1, nombrePaciente: 'Laura Gomez', dni: 44165393, symbol: 'H'},
  {position: 2, nombrePaciente: 'Miranda Checa', dni: 11111111, symbol: 'He'},
  {position: 3, nombrePaciente: 'Lupe Acosta', dni: 22222222, symbol: 'Li'},
  {position: 4, nombrePaciente: 'Mariana Portugal', dni: 33333333, symbol: 'Be'},
  {position: 5, nombrePaciente: 'Juana Revoredo', dni: 15555530, symbol: 'B'},
  {position: 6, nombrePaciente: 'Lucas Rubinshtein', dni: 15478963, symbol: 'C'},
  {position: 7, nombrePaciente: 'Nadia Quispe', dni: 98745632, symbol: 'N'},
  {position: 8, nombrePaciente: 'Sebastian Osorio', dni: 99999999, symbol: 'O'},
  {position: 9, nombrePaciente: 'María Toribio', dni: 55555555, symbol: 'F'},
  {position: 10, nombrePaciente: 'Azucena Quispe', dni: 66666666, symbol: 'Ne'},
];
