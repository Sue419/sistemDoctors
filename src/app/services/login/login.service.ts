import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private http: HttpClient) { }

  logout(): void {
    // Redirige al usuario a la página de inicio de sesión
    console.log('Logout called');
    this.router.navigateByUrl('/login');
  }

}

