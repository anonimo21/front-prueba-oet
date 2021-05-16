import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { PropietariosComponent } from './propietarios/propietarios.component';

const childRoutes: Routes = [
  //rutas de mantemientos
  { path: 'vehiculos', component: VehiculosComponent, },
  { path: 'conductores', component: ConductoresComponent, },
  { path: 'propietarios', component: PropietariosComponent, },
  { path: 'informes', component: PropietariosComponent, },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChildRoutesModule { }
