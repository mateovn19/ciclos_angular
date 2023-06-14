import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosRoutingModule } from './modulos-routing.module';
import { CiclosComponent } from './ciclos/ciclos.component';


@NgModule({
  declarations: [
    CiclosComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule
  ]
})
export class ModulosModule { }
