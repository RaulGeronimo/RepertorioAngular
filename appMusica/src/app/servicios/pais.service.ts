import { Injectable } from '@angular/core';
//Llamar al modulo de Angular http
import { HttpClient } from '@angular/common/http';
//Importamos la interfaz
import { Pais } from '../modelos/Pais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  //Crear una propiedad donde este la ruta
  API_URI = 'http://localhost:3000/app';
  //Hacer una instancia para poder ocupar la propiedad http

  constructor(private http: HttpClient) { }

  getPaises(){
    return this.http.get(`${this.API_URI}/pais`);
  }

  getPais(idPais: String){
    return this.http.get(`${this.API_URI}/pais/${idPais}`);
  }

  createPais(pais: Pais){
    return this.http.post(`${this.API_URI}/pais`, pais);
  }

  deletePais(idPais: string){
    return this.http.delete(`${this.API_URI}/pais/${idPais}`);
  }

  updatePais(idPais: string, updatePais: Pais): Observable<Pais>{
    return this.http.put(`${this.API_URI}/pais/${idPais}`, updatePais);
  }
}
