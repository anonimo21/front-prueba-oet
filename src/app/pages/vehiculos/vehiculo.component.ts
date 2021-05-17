import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/models/driver.model';
import { Owner } from 'src/app/models/owner.model';
import { Tipo } from 'src/app/models/tipo.model';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { ConductoresService } from 'src/app/services/conductores.service';
import { PropietariosService } from 'src/app/services/propietarios.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-vehiculo',
    templateUrl: './vehiculo.component.html',
    styles: [
    ]
})
export class VehiculoComponent implements OnInit {

    public vehiculo: Vehiculo;
    public conductores: Driver[] = [];
    public propietarios: Owner[] = [];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private vehiculosService: VehiculosService,
        private conductoresService: ConductoresService,
        private propietariosService: PropietariosService,
    ) {
        this.vehiculo = new Vehiculo(0, '', '', '');
    }

    ngOnInit(): void {
        this.listarConductores();
        this.listarPropietarios();
        this.activatedRoute.params.subscribe(({ id }) => {
            this.cargarVehiculo(id);
        });
    }

    cargarVehiculo(id: number) {
        this.vehiculosService.obtenerVehiculoById(id)
            .subscribe(vehiculo => {
                //console.log(vehiculo);
                this.vehiculo = new Vehiculo(vehiculo.id, vehiculo.placa, vehiculo.color, vehiculo.marca, vehiculo['tipo']['id'], vehiculo['driver']['person_id'], vehiculo['owner']['person_id']);
                //console.log(this.vehiculo);
            });
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

    actualizarVehiculo(form) {
        //console.log(form.value);
        this.vehiculosService.actualizarVehiculo(this.vehiculo)
          .subscribe((resp: Vehiculo) => {
            Swal.fire('Informacion', 'vehiculo actualizado con exito', 'success');
            this.router.navigateByUrl(`/dashboard/vehiculos`);
          });
      }

}
