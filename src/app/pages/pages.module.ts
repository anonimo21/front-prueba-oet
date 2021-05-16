import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { InformesComponent } from './informes/informes.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    VehiculosComponent,
    InformesComponent,
    ConductoresComponent,
    PropietariosComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    ComponentsModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
