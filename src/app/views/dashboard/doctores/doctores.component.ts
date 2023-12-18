import { Component, OnInit } from '@angular/core';
import { MedicosServices } from 'src/app/services/medicos/medicos.services';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent implements OnInit {

  medicos:any[]=[];

  constructor(
    private medicosService:MedicosServices
  ) { }
  ngOnInit(): void {
  }

  consultarMedicos(){
    this.medicosService.consultarMedicos().subscribe({
      next: (data:any) => {
        this.medicos = data;
        console.log(this.medicos);
      
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  editarMedico(medico:any){
    //aqui el metodo para editar por tip_docum y cod_docum

    //Me decias que te pasaron el esquema o la conexión siiiiii :)
  }

  eliminarMedico(medico:any){
    //aqui el metodo para elikminar por tip_docum y cod_docum
  }
}
