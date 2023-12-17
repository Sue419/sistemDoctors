import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export default class HomeAdminComponent {
  servicios = [
    {
      titulo: 'BOTOX',
      imagen: '../../../assets/servicios/botox.jpg',
      descripcion: 'Descripción del Servicio 1'
    },
    {
      titulo: 'FILLERS',
      imagen: '../../../assets/servicios/filler-estetica.png',
      descripcion: 'Descripción del Servicio 2'
    },
    {
      titulo: 'LÁSER',
      imagen: '../../../assets/servicios/laserl.jpg',
      descripcion: 'Descripción del Servicio 3'
    }
  ];






}
