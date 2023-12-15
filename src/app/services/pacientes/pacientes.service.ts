import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private router: Router) { }
// public menu: any = [
// {
//   titulo: 'Doctores',
//   icono: '',
//   submenu: [
//     {titulo: 'Datos del doctor', url: '/dashboard/datos-doctor'}
//   ]
// },
// {
//   titulo: 'Pacientes',
//   icono: '',
//   submenu: [
//     {titulo: 'Registrar Paciente', url: '/dashboard/crear-paciente'},
//     {titulo: 'Datos deñ Paciente', url: '/dashboard/datos-paciente'}
//   ]
// },
// {
//   titulo: 'Historial Clínico',
//   icono: '',
//   submenu: [
//     {titulo: 'Nuevo Historial', url: '/dashboard/nuevo-historial'},
//     {titulo: 'Historial', url: '/dashboard/historial-paciente'}
//   ]
// }
// ]

}
