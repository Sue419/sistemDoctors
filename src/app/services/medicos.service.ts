import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private httpClient: HttpClient) { }

  // Método get para traernos a todos los médicos
  getAllMedicos():Observable<any>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.get(environment.BASE_URL_BACK + environment.URL_ENDPOINT_MEDICOS);
  }
}
