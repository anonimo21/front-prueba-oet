import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Driver } from '../models/driver.model';
import { Person } from '../models/person.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {

  constructor(private httpClient: HttpClient) { }

  cargarConductores(){
    const url = `${base_url}/drivers`;
    return this.httpClient.get(url)
    .pipe(
      map((resp: {data: Driver[], code: number, msg: string}) => resp.data)
    ); 
  }
  actualizarConductor(conductor: Person){
    const url = `${base_url}/drivers/${conductor.id}`;
    return this.httpClient.put(url, conductor); 
  }

  borrarConductor(id: number){
    const url = `${base_url}/drivers/${id}`;
    return this.httpClient.delete(url); 
  }

  obtenerConductorById(id: number){
    const url = `${base_url}/drivers/${id}`;
    return this.httpClient.get(url)
    .pipe(
      map((resp: Person) => resp)
    )
  }
}
