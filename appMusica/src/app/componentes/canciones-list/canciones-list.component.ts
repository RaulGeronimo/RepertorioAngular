import { Component, HostBinding, OnInit } from '@angular/core';
//Importamos el archivo de .service.ts
import { CancionesService } from 'src/app/servicios/canciones.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-canciones-list',
  templateUrl: './canciones-list.component.html',
  styleUrls: ['./canciones-list.component.css'],
})
export class CancionesListComponent implements OnInit {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';
  //Creamos el arreglo vacio llamado Canciones
  Canciones: any = [];
  search: any;
  
  constructor(
    private Service: CancionesService,
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
