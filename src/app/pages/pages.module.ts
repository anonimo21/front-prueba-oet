import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { PropietarioComponent } from './propietarios/propietario.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { ConductorComponent } from './conductores/conductor.component';
import { InformesComponent } from './informes/informes.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { VehiculoComponent } from './vehiculos/vehiculo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VehiculosComponent,
    InformesComponent,
    ConductoresComponent,
    ConductorComponent,
    PropietariosComponent,
    PropietarioComponent,
    PagesComponent,
    VehiculoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
