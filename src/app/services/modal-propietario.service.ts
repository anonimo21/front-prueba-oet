import { EventEmitter, Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ModalPropietarioService {

  private _ocultarModal: boolean = true;
  public nuevoUsuario: EventEmitter<Person> = new EventEmitter<Person>();

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
