import { Component, HostBinding, OnInit } from '@angular/core';
//Importamos el archivo de .service.ts
import { DisqueraService } from 'src/app/servicios/disquera.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-disquera-list',
  templateUrl: './disquera-list.component.html',
  styleUrls: ['./disquera-list.component.css'],
})
export class DisqueraListComponent implements OnInit {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';
  //Creamos el arreglo vacio llamado Grupos
  Disqueras: any = [];

  constructor(
    private Service: DisqueraService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obtenerLista();
  }

  obtenerLista() {
    this.Service.getDisqueras().subscribe(
      (res) => {
        //Llena el arreglo con la respuesta que enviamos
        this.Disqueras = res;
      },
      (err) => console.error(err)
    );
  }

  borrar(idDisquera: string) {
    this.Service.delete(idDisquera).subscribe(
      (res) => {
        //Llena el arreglo con la respuesta que enviamos
        console.log(res);
        this.obtenerLista();
        this.toastr.warning(
          'La disquera fue eliminada con éxito',
          'Disquera eliminada'
        );
      },
      (err) => console.error(err)
    );
  }
}
