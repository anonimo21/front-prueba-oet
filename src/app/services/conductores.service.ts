import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Driver } from '../models/driver.model';

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
}
