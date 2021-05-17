import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { ModalService } from 'src/app/services/modal.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styles: [
  ]
})
export class VehiculosComponent implements OnInit {

  public vehiculos: Vehiculo[] = [];
  public cargando: boolean = true;

  constructor(private vehiculosService: VehiculosService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.listarVehiculos();
    this.modalService.nuevoUsuario.subscribe(resp => this.listarVehiculos());
  }

  listarVehiculos() {
    this.vehiculosService.cargarVehiculos()
      .subscribe((vehiculos: Vehiculo[]) => {
        this.vehiculos = vehiculos;
        this.cargando = false;
        //console.log(this.vehiculos)
      });
  }

  borrarVehiculo(id) {
    Swal.fire({
      title: 'Eliminar Vehiculo?',
      text: `Esta a punto de eliminar el vehiculo número ${id}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.vehiculosService.borrarVehiculo(id)
          .subscribe(resp => {
            console.log(resp);
            this.listarVehiculos();
            Swal.fire('Eliminado', id, 'success');
          });
      }
    })
  }

  abrirModal() {
    this.modalService.abrirModal();
  }

}
