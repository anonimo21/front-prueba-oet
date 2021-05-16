import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../models/vehiculo.model';
import { map } from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private httpClient: HttpClient) { }

  cargarVehiculos(){
    const url = `${base_url}/vehicles`;
    return this.httpClient.get(url)
    .pipe(
      map((resp: {data: Vehiculo[], code: number, msg: string}) => resp.data)
    ); 
  }

}
