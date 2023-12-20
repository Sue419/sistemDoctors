import { Component, OnInit } from '@angular/core';
import { MedicosService } from 'src/app/services/medicos/medicos.service';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent implements OnInit {

  medicos:any[]=[];

  constructor(
    private medicosService:MedicosService
  ) { }
  ngOnInit(): void {
  }

  consultarMedicos(){
    this.medicosService.getAllMedicos().subscribe({
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
  }

  eliminarMedico(medico:any){
    //aqui el metodo para elikminar por tip_docum y cod_docum
  }
}
