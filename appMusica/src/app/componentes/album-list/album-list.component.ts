import { Component, HostBinding, OnInit } from '@angular/core';
//Importamos el archivo de .service.ts
import { AlbumService } from 'src/app/servicios/album.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';
  //Creamos el arreglo vacio llamado artistas
  Albums: any = [];
  search: any;

  constructor(private Service: AlbumService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.obtenerLista();
  }

  obtenerLista() {
    this.Service.getAlbums().subscribe(
      (res) => {
        console.log(res); //Muestra en consola
        //Llena el arreglo con la respuesta que enviamos
        this.Albums = res;
      },
      (err) => console.error(err)
    );
  }

  borrar(idAlbum: string) {
    this.Service.delete(idAlbum).subscribe(
      (res) => {
        //Llena el arreglo con la respuesta que enviamos
        console.log(res);
        this.obtenerLista();
        this.toastr.warning(
          'El álbum fue eliminado con éxito',
          'Álbum eliminado'
        );
      },
      (err) => console.error(err)
    );
  }
}
