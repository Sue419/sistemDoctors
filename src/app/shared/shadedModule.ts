import { NgModule } from '@angular/core';
import { HeaderComponent } from './shared-components/header/header.component';
import FooterComponent from './shared-components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EditModalComponent } from '../views/dashboard/edit-modal/edit-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
declarations: [ 
    HeaderComponent,
    FooterComponent,
    EditModalComponent,

],
imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
],
exports: [
HeaderComponent,
FooterComponent,
EditModalComponent,

]
})
export class sharedModule {} 

