import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './connect-routing.module';
import { CoreModule } from '../core/core.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
  
    ContactUsComponent,
       AboutUsComponent
  ],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    CoreModule
  ]
})
export class ConnectModule { }
