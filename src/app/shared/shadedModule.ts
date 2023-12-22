import { NgModule } from '@angular/core';
import { HeaderComponent } from './shared-components/header/header.component';
import FooterComponent from './shared-components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DeleteModalComponent } from '../views/dashboard/delete-modal/delete-modal.component';
import { EditModalComponent } from '../views/dashboard/edit-modal/edit-modal.component';




@NgModule({
declarations: [ 
    HeaderComponent,
    FooterComponent,
    DeleteModalComponent,
    EditModalComponent,

],
imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
],
exports: [
HeaderComponent,
FooterComponent,
DeleteModalComponent,
EditModalComponent,

]
})
export class sharedModule {} 

