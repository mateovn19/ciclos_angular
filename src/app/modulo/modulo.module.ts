import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloRoutingModule } from './modulo-routing.module';
import { ComponenteComponent } from './componente/componente.component';


@NgModule({
  declarations: [
    ComponenteComponent
  ],
  imports: [
    CommonModule,
    ModuloRoutingModule
  ]
})
export class ModuloModule { }
