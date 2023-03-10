import { Injectable } from '@angular/core';
//Llamar al modulo de Angular http
import { HttpClient } from '@angular/common/http';
//Importamos la interfaz
import { Observable } from 'rxjs';
import { Album } from '../modelos/Album';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  //Crear una propiedad donde este la ruta
  API_URI = 'http://localhost:3000/app';
  //Hacer una instancia para poder ocupar la propiedad http

  constructor(private http: HttpClient) {}

  getAlbums() {
    return this.http.get(`${this.API_URI}/album`);
  }

  getAlbum(idAlbum: String) {
    return this.http.get(`${this.API_URI}/album/${idAlbum}`);
  }

  create(album: Album) {
    return this.http.post(`${this.API_URI}/album`, album);
  }

  delete(idAlbum: string) {
    return this.http.delete(`${this.API_URI}/album/${idAlbum}`);
  }

  update(idAlbum: string, update: Album): Observable<Album> {
    return this.http.put(`${this.API_URI}/album/${idAlbum}`, update);
  }
}
