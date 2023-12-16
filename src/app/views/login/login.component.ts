import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/shared-components/header/header.component';
import FooterComponent from 'src/app/shared/shared-components/footer/footer.component';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email: string = '';
  public emailError: string = '';
  password: string = '';
  public passwordError: string = '';

  constructor(private router: Router , public loginService: LoginService) {}

  onLoginClick() {
    // Simula la verificación del correo y contraseña (reemplaza con tu lógica real)
    if (this.email === 'juan@doctor.pe') {
      // Autenticación exitosa para el administrador, redirigir a home-admin
      this.router.navigate(['dashboard']);
    } else {
      // Autenticación fallida, muestra un mensaje de error
      this.emailError = 'Por favor, ingrese un correo válido';
    }
  }

   
    // ngOnInit() {
    //   this.loginService.getCredentials().subscribe((data) => {
    //     console.log('RES 34', data);
    //   })
    // }
    onSubmit(){
      this.router.navigateByUrl('/dashboard');
    }
  }
  



