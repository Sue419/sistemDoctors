import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/shared-components/header/header.component';
import FooterComponent from 'src/app/shared/shared-components/footer/footer.component';
import { LoginService } from 'src/app/services/login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  public email: string = '';
  public emailError: string = '';
  public password: string = '';
  public passwordError: string = '';

  constructor(private fb: FormBuilder,private router: Router , public loginService: LoginService) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });


  }


   
    // ngOnInit() {
    //   this.loginService.getCredentials().subscribe((data) => {
    //     console.log('RES 34', data);
    //   })
    // }
    
    onSubmit(){
      // debugger
       // Aquí puedes manejar la lógica de autenticación
    if (this.loginForm.valid && this.loginForm.value.email === 'juan@doctor.pe') {
      this.router.navigateByUrl('/dashboard');
      console.log('Formulario válido. Enviar datos al servidor.');
    } else {
      console.log('Formulario inválido. Verifica tus datos.');
      this.emailError = 'Por favor, ingrese un correo válido';
    }
 
    }
  }
  



