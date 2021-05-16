import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Informe } from '../models/informe.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  constructor(private httpClient: HttpClient) { }

  cargarInforme(){
    const url = `${base_url}/informe`;
    return this.httpClient.get(url)
    .pipe(
      map((resp: Informe[]) => resp )
    ); 
  }
}
