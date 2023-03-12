import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Para enviar a una ruta Especifica
//Importamos el archivo de .service.ts
import { BuscaIntegrantesGrupoService } from 'src/app/servicios/busca-integrantes-grupo.service';
import { ArtistaGrupoService } from 'src/app/servicios/artista-grupo.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';
import { GruposService } from 'src/app/servicios/grupos.service';

@Component({
  selector: 'app-busca-integrantes-grupo',
  templateUrl: './busca-integrantes-grupo.component.html',
  styleUrls: ['./busca-integrantes-grupo.component.css'],
})
export class BuscaIntegrantesGrupoComponent implements OnInit {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';

  //Creamos el arreglo vacio llamado Canciones
  artistas: any = [];
  Grupo: any = [];
  search: any;

  constructor(
    private Service: BuscaIntegrantesGrupoService,
    private activatedRoute: ActivatedRoute,
    private ArtistaGrupoService: ArtistaGrupoService,
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
      this.Service.getIntegrante(params['idGrupo']).subscribe(
        (res) => {
          console.log(res); //Muestra en consola
          this.artistas = res; //Muestra en el navegador
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
            `Integrantes del grupo '${this.Grupo.Nombre}'`,
            'Lista de Integrantes'
          );
        },
        (err) => console.error(err)
      );
    }
  }

  borrar(idArtista: string) {
    this.ArtistaGrupoService.delete(idArtista).subscribe(
      (res) => {
        //Llena el arreglo con la respuesta que enviamos
        console.log(res);
        this.obtenerLista();
        this.toastr.warning(
          'El integrante fue eliminado con éxito',
          'Integrante eliminado'
        );
      },
      (err) => console.error(err)
    );
  }
}
