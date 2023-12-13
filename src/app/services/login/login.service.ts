import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  logout(): void {
    // Redirige al usuario a la página de inicio de sesión
    console.log('Logout called');
    this.router.navigateByUrl('/login');
  }
}

