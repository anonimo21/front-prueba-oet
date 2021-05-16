import { EventEmitter, Injectable } from '@angular/core';
import { Vehiculo } from '../models/vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _ocultarModal: boolean = true;
  public nuevoUsuario: EventEmitter<Vehiculo> = new EventEmitter<Vehiculo>();

  get ocultarModal() {
    return this._ocultarModal;
  }

  constructor() { }

  abrirModal() {
    this._ocultarModal = false;
  }

  cerrarModal() {
    this._ocultarModal = true;
  }

}
