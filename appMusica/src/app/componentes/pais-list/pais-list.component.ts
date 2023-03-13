import { Component, HostBinding, OnInit } from '@angular/core';
//Importamos el archivo de Pais.service.ts
import { PaisService } from 'src/app/servicios/pais.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css'],
})
export class PaisListComponent implements OnInit {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';
  //Creamos el arreglo vacio llamado paises
  paises: any = [];
  search: any;

  constructor(
    private paisService: PaisService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obtenerPaises();
  }

  obtenerPaises() {
    this.paisService.getPaises().subscribe(
      (res) => {
        console.log(res); //Muestra en consola
        //Llena el arreglo con la respuesta que enviamos
        this.paises = res;
      },
      (err) => console.error(err)
    );
  }

  borrarPais(idPais: string) {
    this.paisService.deletePais(idPais).subscribe(
      (res) => {
        //Llena el arreglo con la respuesta que enviamos
        console.log(res);
        this.obtenerPaises();
        this.toastr.warning(
          'El pais fue eliminado con éxito',
          'Pais eliminado'
        );
      },
      (err) => console.error(err)
    );
  }
}
