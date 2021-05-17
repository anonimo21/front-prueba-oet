import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { ConductoresService } from 'src/app/services/conductores.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-vehiculo',
    templateUrl: './conductor.component.html',
    styles: [
    ]
})
export class ConductorComponent implements OnInit {

    public persona: Person;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private conductorService: ConductoresService,
    ) {
        this.persona = new Person(0, '', '', '', '', '', '', '');
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(({ id }) => {
            this.cargarConductor(id);
        });
    }

    cargarConductor(id: number) {
        this.conductorService.obtenerConductorById(id)
            .subscribe(conductor => {
                //console.log(conductor);
                this.persona = new Person(conductor['driver']['id'], conductor['driver']['cedula'], conductor['driver']['primer_nombre'], conductor['driver']['segundo_nombre'], conductor['driver']['apellidos'], conductor['driver']['direccion'], conductor['driver']['telefono'], conductor['driver']['ciudad']);
                //console.log(this.persona);
            });
    }

    actualizarConductor(form) {
        //console.log(form.value);
        this.conductorService.actualizarConductor(this.persona)
          .subscribe((resp: Person) => {
            Swal.fire('Informacion', 'conductor actualizado con exito', 'success');
            this.router.navigateByUrl(`/dashboard/conductores`);
          });
      }
}
