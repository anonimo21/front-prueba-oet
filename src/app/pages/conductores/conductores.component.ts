import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/driver.model';
import { ConductoresService } from 'src/app/services/conductores.service';
import { ModalPropietarioService } from 'src/app/services/modal-propietario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styles: [
  ]
})
export class ConductoresComponent implements OnInit {

  public conductores: Driver[] = [];
  public cargando: boolean = true;
  public tipo: string = 'conductor';
  
  constructor(private conductoresService: ConductoresService, private modalPropietarioService: ModalPropietarioService) { }

  ngOnInit(): void {
    this.listarConductores();
    this.modalPropietarioService.nuevoUsuario.subscribe(resp => this.listarConductores());
  }

  listarConductores() {
    this.conductoresService.cargarConductores()
      .subscribe((conductores: Driver[]) => {
        this.conductores = conductores;
        this.cargando = false;
        //console.log(this.conductores)
      });
  }

  borrarConductor(id){
    Swal.fire({
      title: 'Eliminar Conductor?',
      text: `Esta a punto de eliminar el conductor número ${id}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.conductoresService.borrarConductor(id)
          .subscribe(resp => {
            console.log(resp);
            this.listarConductores();
            Swal.fire('Eliminado', id, 'success');
          });
      }
    })
  }

  abrirModal() {
    this.modalPropietarioService.abrirModal();
  }

}
