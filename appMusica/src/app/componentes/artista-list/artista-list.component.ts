import { Component, HostBinding, OnInit } from '@angular/core';
//Importamos el archivo de Artista.service.ts
import { ArtistaService } from 'src/app/servicios/artista.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-artista-list',
  templateUrl: './artista-list.component.html',
  styleUrls: ['./artista-list.component.css'],
})
export class ArtistaListComponent implements OnInit {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';
  //Creamos el arreglo vacio llamado artistas
  artistas: any = [];
  search: any;

  constructor(private Service: ArtistaService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.obtenerLista();
  }

  obtenerLista() {
    this.Service.getArtistas().subscribe(
      (res) => {
        console.log(res); //Muestra en consola
        //Llena el arreglo con la respuesta que enviamos
        this.artistas = res;
      },
      (err) => console.error(err)
    );
  }

  borrar(idArtista: string) {
    this.Service.delete(idArtista).subscribe(
      (res) => {
        //Llena el arreglo con la respuesta que enviamos
        console.log(res);
        this.obtenerLista();
        this.toastr.warning(
          'El artista fue eliminado con éxito',
          'Artista eliminado'
        );
      },
      (err) => console.error(err)
    );
  }
}
