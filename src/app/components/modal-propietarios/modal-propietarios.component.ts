import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { ModalPropietarioService } from 'src/app/services/modal-propietario.service';
import { PropietariosService } from 'src/app/services/propietarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-propietarios',
  templateUrl: './modal-propietarios.component.html',
  styleUrls: ['./modal-propietarios.component.css']
})
export class ModalPropietariosComponent implements OnInit {

  @Input() tipo: string;

  public persona: Person;

  constructor(public modalPropietarioService: ModalPropietarioService, private propietariosService: PropietariosService) {
    this.persona = new Person(0,'','','','','','','');
  }

  ngOnInit(): void {
    //console.log(this.tipo);
  }

  cerrarModal(form){
    this.modalPropietarioService.cerrarModal();
    form.reset();
  }

  guardarPropietario(form) {
    //console.log(form.value);
    this.propietariosService.guardarPropietario(this.persona)
    .subscribe((resp: Person) => {
      Swal.fire('Informacion', 'Propietario creado con exito', 'success');
      this.modalPropietarioService.nuevoUsuario.emit(resp);
      this.modalPropietarioService.cerrarModal();
      form.reset();
    });
  }

  guardarConductor(form) {
    //console.log(form.value);
    this.propietariosService.guardarConductor(this.persona)
    .subscribe((resp: Person) => {
      Swal.fire('Informacion', 'Conductor creado con exito', 'success');
      this.modalPropietarioService.nuevoUsuario.emit(resp);
      this.modalPropietarioService.cerrarModal();
      form.reset();
    });
  }

}
