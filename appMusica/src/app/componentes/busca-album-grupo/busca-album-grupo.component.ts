import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Para enviar a una ruta Especifica
//Importamos el archivo de .service.ts
import { BuscaAlbumGrupoService } from 'src/app/servicios/busca-album-grupo.service';
import { AlbumService } from 'src/app/servicios/album.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';
import { GruposService } from 'src/app/servicios/grupos.service';

@Component({
  selector: 'app-busca-album-grupo',
  templateUrl: './busca-album-grupo.component.html',
  styleUrls: ['./busca-album-grupo.component.css'],
})
export class BuscaAlbumGrupoComponent {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';

  //Creamos el arreglo vacio llamado Canciones
  Album: any = [];
  Grupo: any = [];
  search: any;

  constructor(
    private Service: BuscaAlbumGrupoService,
    private activatedRoute: ActivatedRoute,
    private AlbumService: AlbumService,
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
      this.Service.getAlbum(params['idGrupo']).subscribe(
        (res) => {
          console.log(res); //Muestra en consola
          this.Album = res; //Muestra en el navegador
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
            `Álbums del grupo '${this.Grupo.Nombre}'`,
            'Lista de Álbums'
          );
        },
        (err) => console.error(err)
      );
    }
  }

  borrar(idAlbum: string) {
    this.AlbumService.delete(idAlbum).subscribe(
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
