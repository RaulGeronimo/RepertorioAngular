import { Component, HostBinding, OnInit } from '@angular/core';
//Importamos el archivo de .service.ts
import { CancionesAlbumService } from 'src/app/servicios/canciones-album.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-canciones-album-list',
  templateUrl: './canciones-album-list.component.html',
  styleUrls: ['./canciones-album-list.component.css'],
})
export class CancionesAlbumListComponent implements OnInit {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';
  //Creamos el arreglo vacio llamado Canciones
  Canciones: any = [];
  search: any;

  constructor(
    private Service: CancionesAlbumService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obtenerLista();
  }

  obtenerLista() {
    this.Service.getCanciones().subscribe(
      (res) => {
        console.log(res); //Muestra en consola
        //Llena el arreglo con la respuesta que enviamos
        this.Canciones = res;
      },
      (err) => console.error(err)
    );
  }

  borrar(idCancion: string) {
    this.Service.delete(idCancion).subscribe(
      (res) => {
        //Llena el arreglo con la respuesta que enviamos
        console.log(res);
        this.obtenerLista();
        this.toastr.warning(
          'La canción fue eliminada con éxito',
          'Canción eliminada'
        );
      },
      (err) => console.error(err)
    );
  }
}
