import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/driver.model';
import { ConductoresService } from 'src/app/services/conductores.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent implements OnInit {

  public conductores: Driver[] = [];

  constructor(private conductoresService: ConductoresService) { }

  ngOnInit(): void {
    this.listarConductores();
  }

  listarConductores(){
    this.conductoresService.cargarConductores()
    .subscribe((conductores: Driver[]) => {
      this.conductores = conductores;
      console.log(this.conductores)
    });
  }

}
