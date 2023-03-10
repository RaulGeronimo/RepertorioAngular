import { Injectable } from '@angular/core';
//Llamar al modulo de Angular http
import { HttpClient } from '@angular/common/http';
//Importamos la interfaz
import { Observable } from 'rxjs';
import { Artista_Grupo } from '../modelos/ArtistaGrupo';

@Injectable({
  providedIn: 'root',
})
export class ArtistaGrupoService {
  //Crear una propiedad donde este la ruta
  API_URI = 'http://localhost:3000/app';
  //Hacer una instancia para poder ocupar la propiedad http

  constructor(private http: HttpClient) {}

  getArtistas() {
    return this.http.get(`${this.API_URI}/artista_Grupo`);
  }

  getArtista(Codigo: String) {
    return this.http.get(`${this.API_URI}/artista_Grupo/${Codigo}`);
  }

  create(artista: Artista_Grupo) {
    return this.http.post(`${this.API_URI}/artista_Grupo`, artista);
  }

  delete(Codigo: string) {
    return this.http.delete(`${this.API_URI}/artista_Grupo/${Codigo}`);
  }

  update(Codigo: string, update: Artista_Grupo): Observable<Artista_Grupo> {
    return this.http.put(`${this.API_URI}/artista_Grupo/${Codigo}`, update);
  }
}
