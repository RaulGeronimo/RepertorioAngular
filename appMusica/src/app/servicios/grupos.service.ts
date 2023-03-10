import { Injectable } from '@angular/core';
//Llamar al modulo de Angular http
import { HttpClient } from '@angular/common/http';
//Importamos la interfaz
import { Observable } from 'rxjs';
import { Grupos } from '../modelos/Grupos';

@Injectable({
  providedIn: 'root',
})
export class GruposService {
  //Crear una propiedad donde este la ruta
  API_URI = 'http://localhost:3000/app';
  //Hacer una instancia para poder ocupar la propiedad http

  constructor(private http: HttpClient) {}

  getGrupos() {
    return this.http.get(`${this.API_URI}/grupo`);
  }

  getGrupo(idGrupo: String) {
    return this.http.get(`${this.API_URI}/grupo/${idGrupo}`);
  }

  create(grupos: Grupos) {
    return this.http.post(`${this.API_URI}/grupo`, grupos);
  }

  delete(idGrupo: string) {
    return this.http.delete(`${this.API_URI}/grupo/${idGrupo}`);
  }

  update(idGrupo: string, update: Grupos): Observable<Grupos> {
    return this.http.put(`${this.API_URI}/grupo/${idGrupo}`, update);
  }
}
