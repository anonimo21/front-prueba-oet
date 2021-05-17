import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/driver.model';
import { Owner } from 'src/app/models/owner.model';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { ConductoresService } from 'src/app/services/conductores.service';
import { ModalService } from 'src/app/services/modal.service';
import { PropietariosService } from 'src/app/services/propietarios.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public conductores: Driver[] = [];
  public propietarios: Owner[] = [];
  public vehiculo: Vehiculo;

  constructor(
    private conductoresService: ConductoresService,
    private propietariosService: PropietariosService,
    private vehiculoService: VehiculosService,
    public modalService: ModalService
  ) {
    this.vehiculo = new Vehiculo(0, '', '', '');
  }

  ngOnInit(): void {
    this.listarConductores();
    this.listarPropietarios();
  }

  cerrarModal(form) {
    this.modalService.cerrarModal();
    form.reset();
  }

  listarConductores() {
    this.conductoresService.cargarConductores()
      .subscribe((conductores: Driver[]) => {
        this.conductores = conductores;
        //console.log(this.conductores)
      });
  }

  listarPropietarios() {
    this.propietariosService.cargarPropietarios()
      .subscribe((propietarios: Driver[]) => {
        this.propietarios = propietarios;
        //console.log(this.propietarios)
      });
  }

  guardarVehiculo(form) {
    //console.log(form.value);
    this.vehiculoService.guardarVehiculo(this.vehiculo)
      .subscribe((resp: Vehiculo) => {
        Swal.fire('Informacion', 'vehiculo creado con exito', 'success');
        this.modalService.nuevoUsuario.emit(resp);
        this.modalService.cerrarModal();
        form.reset();
      }, (err) => {
        //console.log(err);
        //this.modalService.cerrarModal();
        //form.reset();
        const errors = [];
        Object.entries(err['error'].errors).forEach(([key, value]) => {
          errors.push(value);
        });
        //console.log(errors);
        errors.forEach(element => {
          alert(element)
        });
      });
  }

}
