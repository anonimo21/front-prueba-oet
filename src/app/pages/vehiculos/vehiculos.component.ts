import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styles: [
  ]
})
export class VehiculosComponent implements OnInit {

  public vehiculos: Vehiculo[] = [];
  public cargando: boolean = true;

  constructor(private vehiculosService: VehiculosService) { }

  ngOnInit(): void {
    this.listarVehiculos();
  }

  listarVehiculos(){
    this.vehiculosService.cargarVehiculos()
    .subscribe((vehiculos: Vehiculo[]) => {
      this.vehiculos = vehiculos;
      this.cargando = false;
      console.log(this.vehiculos)
    });
  }

}
