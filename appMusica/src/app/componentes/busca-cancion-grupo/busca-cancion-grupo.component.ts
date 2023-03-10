import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Para enviar a una ruta Especifica
//Importamos el archivo de .service.ts
import { BuscaCancionGrupoService } from 'src/app/servicios/busca-cancion-grupo.service';
import { CancionesService } from 'src/app/servicios/canciones.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';
import { GruposService } from 'src/app/servicios/grupos.service';

@Component({
  selector: 'app-busca-cancion-grupo',
  templateUrl: './busca-cancion-grupo.component.html',
  styleUrls: ['./busca-cancion-grupo.component.css'],
})
export class BuscaCancionGrupoComponent implements OnInit {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';

  //Creamos el arreglo vacio llamado Canciones
  Canciones: any = [];
  Grupo: any = [];

  constructor(
    private Service: BuscaCancionGrupoService,
    private activatedRoute: ActivatedRoute,
    private CancionesAlbumService: CancionesService,
    private GrupoService: GruposService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obtenerLista();
    this.obtenerGrupo();
  }

  obtenerLista() {
    const params = this.activatedRoute.snapshot.params;
    if (params['idGrupo']) {
      this.Service.getCancion(params['idGrupo']).subscribe(
        (res) => {
          console.log(res); //Muestra en consola
          this.Canciones = res; //Muestra en el navegador
        },
        (err) => console.error(err)
      );
    }
  }

  obtenerGrupo() {
    const params = this.activatedRoute.snapshot.params;
    if (params['idGrupo']) {
      this.GrupoService.getGrupo(params['idGrupo']).subscribe(
        (res) => {
          console.log(res); //Muestra en consola
          this.Grupo = res; //Muestra en el navegador
          this.toastr.success(
            `Canciones del grupo '${this.Grupo.Nombre}'`,
            'Lista de Canciones'
          );
        },
        (err) => console.error(err)
      );
    }
  }

  borrar(idCancion: string) {
    this.CancionesAlbumService.delete(idCancion).subscribe(
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
