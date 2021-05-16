import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { ModalPropietariosComponent } from './modal-propietarios/modal-propietarios.component';

@NgModule({
  declarations: [
    ModalComponent,
    ModalPropietariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ModalComponent,
    ModalPropietariosComponent
  ]
})
export class ComponentsModule { }
