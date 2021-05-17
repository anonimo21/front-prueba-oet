import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Owner } from '../models/owner.model';
import { Person } from '../models/person.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PropietariosService {

  constructor(private httpClient: HttpClient) { }

  cargarPropietarios(){
    const url = `${base_url}/owners`;
    return this.httpClient.get(url)
    .pipe(
      map((resp: {data: Owner[], code: number, msg: string}) => resp.data)
    ); 
  }

  guardarPropietario(propietario: Person){
    const url = `${base_url}/owners`;
    return this.httpClient.post(url, propietario); 
  }

  guardarConductor(conductor: Person){
    const url = `${base_url}/drivers`;
    return this.httpClient.post(url, conductor); 
  }

  actualizarPropietario(propietario: Person){
    const url = `${base_url}/owners/${propietario.id}`;
    return this.httpClient.put(url, propietario); 
  }

  borrarPropietario(id: number){
    const url = `${base_url}/owners/${id}`;
    return this.httpClient.delete(url); 
  }

  obtenerPropietarioById(id: number){
    const url = `${base_url}/owners/${id}`;
    return this.httpClient.get(url)
    .pipe(
      map((resp: Person) => resp)
    )
  }
}
