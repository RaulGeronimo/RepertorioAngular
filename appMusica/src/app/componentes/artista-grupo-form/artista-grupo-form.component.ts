import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; //Para enviar a una ruta Especifica
/* ENTIDAD */
import { Artista_Grupo } from 'src/app/modelos/ArtistaGrupo';
import { ArtistaGrupoService } from 'src/app/servicios/artista-grupo.service';
/* LLAVE FORANEA */
import { ArtistaService } from 'src/app/servicios/artista.service';
import { GruposService } from 'src/app/servicios/grupos.service';
import { InstrumentosService } from 'src/app/servicios/instrumentos.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-artista-grupo-form',
  templateUrl: './artista-grupo-form.component.html',
  styleUrls: ['./artista-grupo-form.component.css'],
})
export class ArtistaGrupoFormComponent implements OnInit {
  form: FormGroup;
  @HostBinding('class') classes = 'row';

  artista_Grupo: Artista_Grupo = {
    Codigo: 0,
    idArtista: '',
    idGrupo: '',
    FechaInicio: '',
    FechaFin: '',
    idInstrumento: '',
  };
  edit: boolean = false;

  /* LLAVE FORANEA */
  Artista: any = [];
  Grupo: any = [];
  Instrumentos: any = [];

  constructor(
    private Service: ArtistaGrupoService,
    private ArtistaService: ArtistaService,
    private GruposService: GruposService,
    private InstrumentosService: InstrumentosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      idArtista: ['', Validators.required],
      idGrupo: ['', Validators.required],
      FechaInicio: ['', Validators.required],
      FechaFin: [],
      idInstrumento: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerArtista();
    this.obtenerGrupo();
    this.obtenerInstrumento();
    const params = this.activatedRoute.snapshot.params;
    if (params['Codigo']) {
      this.Service.getArtista(params['Codigo']).subscribe(
        (res) => {
          console.log(res); //Muestra en consola
          this.artista_Grupo = res; //Muestra en el navegador
          this.edit = true; //Asignamos que es verdadero
        },
        (err) => console.error(err)
      );
    }
  }

  add() {
    this.obtenerArtista();
    this.Service.create(this.artista_Grupo).subscribe(
      (res) => {
        //Llenamos el arreglo con la respuesta
        console.log(res);
        this.router.navigate(['artista_Grupo']);
        this.toastr.success(
          'El artista fue agregado al grupo con éxito',
          'Artista Agregado'
        );
      },
      (err) => console.error(err)
    );
  }

  actualiza() {
    const params = this.activatedRoute.snapshot.params;
    this.Service.update(params['Codigo'], this.artista_Grupo).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/artista_Grupo']);
        this.toastr.info(
          'El artista fue actualizado con éxito',
          'Artista Actualizado'
        );
      },
      (err) => console.error(err)
    );
  }

  obtenerArtista() {
    this.ArtistaService.getArtistas().subscribe(
      (res) => {
        //Llena el arreglo con la respuesta que enviamos
        this.Artista = res;
      },
      (err) => console.error(err)
    );
  }

  obtenerGrupo() {
    this.GruposService.getGrupos().subscribe(
      (res) => {
        //Llena el arreglo con la respuesta que enviamos
        this.Grupo = res;
      },
      (err) => console.error(err)
    );
  }

  obtenerInstrumento() {
    this.InstrumentosService.getInstrumentos().subscribe(
      (res) => {
        //Llena el arreglo con la respuesta que enviamos
        this.Instrumentos = res;
      },
      (err) => console.error(err)
    );
  }
}
