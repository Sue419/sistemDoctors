import { Component } from '@angular/core';
import { MedicosService } from 'src/app/services/medicos.service';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent {

  medicos:[]=[]
  constructor(private medicosService:MedicosService){

  }


  consultarMedicos(){
       this.medicosService.getAllMedicos().subscribe({
         next:(res)=>{
           //console.log(res)
             this.medicos = res;
             console.log(this.medicos);
             
         },
         error:(error)=>{
             console.log("error",error)   
         }
       });  
//       this.medicosService.getAllMedicos().subscribe(res=>{ this.medicos = res})
}

}
