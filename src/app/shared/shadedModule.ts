import { NgModule } from '@angular/core';
import { HeaderComponent } from './shared-components/header/header.component';
import FooterComponent from './shared-components/footer/footer.component';



@NgModule({
declarations: [ 
    HeaderComponent,
    FooterComponent,
],
exports: [
HeaderComponent,
FooterComponent,

]
})
export class sharedModule {} 

