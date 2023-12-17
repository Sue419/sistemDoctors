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
      imagen: '../../../assets/servicios/descarga.png',
      descripcion: 'Descripción del Servicio 1'
    },
    {
      titulo: 'FILLERS',
      imagen: '../../../assets/servicios/filler.jpg',
      descripcion: 'Descripción del Servicio 2'
    },
    {
      titulo: 'RINO-RELLENO',
      imagen: '../../../assets/servicios/rino.avif',
      descripcion: 'Descripción del Servicio 3'
    }
  ];






}
