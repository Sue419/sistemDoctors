import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private router: Router, private httpClient: HttpClient) { } 
  // crearPaciente(): Observable<any>{
  // return this.httpClient.post(environment.BASE_URL_BACK + environment.URL_ENDPOINT_MEDICOS);
  // }


  crearPaciente(datos: any): Observable<any>{
    const headers = new HttpHeaders({
      'accept': 'application/json',
    })
    return this.httpClient.post(environment.BASE_URL_BACK+environment.URL_ENDPOINT_PACIENTES, datos, {headers} );
    }
  
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
