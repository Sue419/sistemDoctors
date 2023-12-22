import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {

}
Swal.fire({
  title: '¡Hola!',
  text: '¡Bienvenido a SweetAlert2!',
  icon: 'success',
  confirmButtonText: 'Aceptar'
});