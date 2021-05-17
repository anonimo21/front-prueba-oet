import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { PropietariosService } from 'src/app/services/propietarios.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-vehiculo',
    templateUrl: './propietario.component.html',
    styles: [
    ]
})
export class PropietarioComponent implements OnInit {

    public persona: Person;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private propietarioService: PropietariosService,
    ) {
        this.persona = new Person(0, '', '', '', '', '', '', '');
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(({ id }) => {
            this.cargarPropietario(id);
        });
    }

    cargarPropietario(id: number) {
        this.propietarioService.obtenerPropietarioById(id)
            .subscribe(propietario => {
                //console.log(propietario);
                this.persona = new Person(propietario['owner']['id'], propietario['owner']['cedula'], propietario['owner']['primer_nombre'], propietario['owner']['segundo_nombre'], propietario['owner']['apellidos'], propietario['owner']['direccion'], propietario['owner']['telefono'], propietario['owner']['ciudad']);
                //console.log(this.persona);
            });
    }

    actualizarPropietario(form) {
        //console.log(form.value);
        this.propietarioService.actualizarPropietario(this.persona)
          .subscribe((resp: Person) => {
            Swal.fire('Informacion', 'propietario actualizado con exito', 'success');
            this.router.navigateByUrl(`/dashboard/propietarios`);
          });
      }
}
