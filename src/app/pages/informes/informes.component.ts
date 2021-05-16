import { Component, OnInit } from '@angular/core';
import { Informe } from 'src/app/models/informe.model';
import { InformeService } from 'src/app/services/informe.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styles: [
  ]
})
export class InformesComponent implements OnInit {

  public informes: Informe[] = [];
  public cargando: boolean = true;

  constructor(private informeService: InformeService) { }

  ngOnInit(): void {
    this.listarInforme();
  }

  listarInforme(){
    this.informeService.cargarInforme()
    .subscribe((informes: Informe[]) => {
      this.informes = informes;
      this.cargando = false;
    });
  }

}
