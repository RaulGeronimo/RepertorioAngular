import { Injectable } from '@angular/core';
//Llamar al modulo de Angular http
import { HttpClient } from '@angular/common/http';
//Importamos la interfaz
import { Observable } from 'rxjs';
import { Artista } from '../modelos/Artista';

@Injectable({
  providedIn: 'root',
})
export class ArtistaService {
  //Crear una propiedad donde este la ruta
  API_URI = 'http://localhost:3000/app';
  //Hacer una instancia para poder ocupar la propiedad http

  constructor(private http: HttpClient) {}

  getArtistas() {
    return this.http.get(`${this.API_URI}/artista`);
  }

  getArtista(idArtista: String) {
    return this.http.get(`${this.API_URI}/artista/${idArtista}`);
  }

  create(artista: Artista) {
    return this.http.post(`${this.API_URI}/artista`, artista);
  }

  delete(idArtista: string) {
    return this.http.delete(`${this.API_URI}/artista/${idArtista}`);
  }

  update(idArtista: string, update: Artista): Observable<Artista> {
    return this.http.put(`${this.API_URI}/artista/${idArtista}`, update);
  }
}
