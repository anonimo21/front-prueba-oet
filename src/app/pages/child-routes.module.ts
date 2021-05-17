import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { InformesComponent } from './informes/informes.component';
import { VehiculoComponent } from './vehiculos/vehiculo.component';
import { PropietarioComponent } from './propietarios/propietario.component';
import { ConductorComponent } from './conductores/conductor.component';

const childRoutes: Routes = [
  //rutas de mantemientos
  { path: 'vehiculos', component: VehiculosComponent, },
  { path: 'vehiculo/:id', component: VehiculoComponent, },
  { path: 'conductores', component: ConductoresComponent, },
  { path: 'conductor/:id', component: ConductorComponent, },
  { path: 'propietarios', component: PropietariosComponent, },
  { path: 'propietario/:id', component: PropietarioComponent, },
  { path: 'informes', component: InformesComponent, },
  {path: '**', redirectTo:'/dashboard'}
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
