import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
