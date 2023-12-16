import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-crea-paciente',
  templateUrl: './crea-paciente.component.html',
  styleUrls: ['./crea-paciente.component.css']
})
export class CreaPacienteComponent {

form = this.fb.group({
paciente: ['', [
Validators.required,
Validators.minLength(5),
Validators.maxLength(60),
]],
appointment: [new Date(), Validators.required],

category: ['BEGINNER', Validators.required],
genderType: ['Femenino', Validators.required],
edad:[],
downloadsAllowed: [false, Validators.requiredTrue],
symptoms: ['', [Validators.required, Validators.minLength(3)]],
signs: ['', [Validators.required, Validators.minLength(3)]],
psique: ['', [Validators.required, Validators.minLength(3)]],
TpAnt: ['', [Validators.required, Validators.minLength(3)]],
Fcos: ['', [Validators.required, Validators.minLength(3)]],
OS:[],
diag:[],
DNI:[],
Domicilio:[],
Tel:[],
FNac:[],
Hijos:[],
Ocupac:[],
Cel:[],
Gpo:[],
EC:[],
Consulta:[],
alergias:[],
MEN:[],
SÑO:[],
Cirugias:[],
CPO:[],
NOC:[],
AntFam:[],
ANS:[],
CIG:[],
AntPers:[],

EST:[],
PesoKG:[],
BMI:[],
Diag:[],
PT:[],
KG:[],
DES:[],
MM:[],
ALM:[],
LON:[],
CEN:[],
FDS:[],
Dlk:[],
Like:[],
Tratamientos:[],

})





constructor(private fb: FormBuilder){

}

get nombrePaciente(){
  return this.form.controls['paciente'];
}

get tipoGenero() {
  return this.form.controls['genderType']; // Cambiado de 'gender-type' a 'genderType'
}

}
