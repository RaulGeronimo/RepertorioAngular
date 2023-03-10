import { Injectable } from '@angular/core';
//Llamar al modulo de Angular http
import { HttpClient } from '@angular/common/http';
//Importamos la interfaz
import { Observable } from 'rxjs';
import { Disquera } from '../modelos/Disquera';

@Injectable({
  providedIn: 'root',
})
export class DisqueraService {
  //Crear una propiedad donde este la ruta
  API_URI = 'http://localhost:3000/app';
  //Hacer una instancia para poder ocupar la propiedad http

  constructor(private http: HttpClient) {}

  getDisqueras() {
    return this.http.get(`${this.API_URI}/disquera`);
  }

  getDisquera(idDisquera: String) {
    return this.http.get(`${this.API_URI}/disquera/${idDisquera}`);
  }

  create(disquera: Disquera) {
    return this.http.post(`${this.API_URI}/disquera`, disquera);
  }

  delete(idDisquera: string) {
    return this.http.delete(`${this.API_URI}/disquera/${idDisquera}`);
  }

  update(idDisquera: string, update: Disquera): Observable<Disquera> {
    return this.http.put(`${this.API_URI}/disquera/${idDisquera}`, update);
  }
}
