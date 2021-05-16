import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner.model';
import { ModalPropietarioService } from 'src/app/services/modal-propietario.service';
import { PropietariosService } from 'src/app/services/propietarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styles: [
  ]
})
export class PropietariosComponent implements OnInit {

  public propietarios: Owner[] = [];
  public cargando: boolean = true;
  public tipo: string = 'propietario';

  constructor(private propietariosService: PropietariosService, private modalPropietarioService: ModalPropietarioService) { }

  ngOnInit(): void {
    this.listarPropietarios();
    this.modalPropietarioService.nuevoUsuario.subscribe(resp => this.listarPropietarios());
  }

  listarPropietarios() {
    this.propietariosService.cargarPropietarios()
      .subscribe((propietario: Owner[]) => {
        this.propietarios = propietario;
        this.cargando = false;
        //console.log(this.vehiculos)
      });
  }

  borrarPropietario(id){
    Swal.fire({
      title: 'Eliminar Propietario?',
      text: `Esta a punto de eliminar el propietario número ${id}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.propietariosService.borrarPropietario(id)
          .subscribe(resp => {
            console.log(resp);
            this.listarPropietarios();
            Swal.fire('Eliminado', id, 'success');
          });
      }
    })
  }

  abrirModal() {
    this.modalPropietarioService.abrirModal();
  }

}
