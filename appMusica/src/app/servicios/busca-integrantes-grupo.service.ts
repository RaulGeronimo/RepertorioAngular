import { Injectable } from '@angular/core';
//Llamar al modulo de Angular http
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BuscaIntegrantesGrupoService {
  //Crear una propiedad donde este la ruta
  API_URI = 'http://localhost:3000/app';
  //Hacer una instancia para poder ocupar la propiedad http

  constructor(private http: HttpClient) {}

  getIntegrante(idGrupo: String) {
    return this.http.get(`${this.API_URI}/buscaIntegrante_Grupo/${idGrupo}`);
  }
}
