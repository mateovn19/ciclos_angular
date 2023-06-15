import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiclosRoutingModule } from './ciclos-routing.module';
import { CicloComponent } from './componenete/ciclo/ciclo.component';
import { ComponentCComponent } from './component-c/component-c.component';


@NgModule({
  declarations: [
    CicloComponent,
    ComponentCComponent
  ],
  imports: [
    CommonModule,
    CiclosRoutingModule
  ]
})
export class CiclosModule { }
