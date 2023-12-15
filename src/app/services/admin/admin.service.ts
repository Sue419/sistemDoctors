import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private router: Router) { }

  showDashboard(){
    this.router.navigate(['home'])
  }
}
