import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class MedicosServices{

    constructor(private httpClient: HttpClient){}

    consultarMedicos(): Observable<any>{
    return this.httpClient.get(environment.BASE_URL_BACK + environment.URL_ENDPOINT_ALL_MEDICOS);
    }
}