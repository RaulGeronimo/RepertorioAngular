import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; //Para enviar a una ruta Especifica
/* ENTIDAD */
import { Cancion } from 'src/app/modelos/Canciones';
import { CancionesService } from 'src/app/servicios/canciones.service';
/* LLAVE FORANEA */
import { GruposService } from 'src/app/servicios/grupos.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-canciones-form',
  templateUrl: './canciones-form.component.html',
  styleUrls: ['./canciones-form.component.css'],
})
export class CancionesFormComponent implements OnInit {
  form: FormGroup;
  @HostBinding('class') classes = 'row';

  cancion: Cancion = {
    idCancion: 0,
    Nombre: '',
    Duracion: '',
    Publicacion: '',
    Genero: '',
    Idioma: '',
    Interpretacion: '',
    idGrupo: '',
  };

  Grupo: any = [];
  edit: boolean = false;

  constructor(
    private Service: CancionesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private GruposService: GruposService
  ) {
    this.form = this.fb.group({
      Nombre: ['', Validators.required],
      Duracion: ['', Validators.required],
      Publicacion: ['', Validators.required],
      Genero: ['', Validators.required],
      Idioma: ['', Validators.required],
      Interpretacion: ['', Validators.required],
      idGrupo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerGrupo();
    const params = this.activatedRoute.snapshot.params;
    if (params['idCancion']) {
      this.Service.getCancion(params['idCancion']).subscribe(
        (res) => {
          console.log(res); //Muestra en consola
          this.cancion = res; //Muestra en el navegador
          this.edit = true; //Asignamos que es verdadero
        },
        (err) => console.error(err)
      );
    }
  }

  add() {
    this.Service.create(this.cancion).subscribe(
      (res) => {
        //Llenamos el arreglo con la respuesta
        console.log(res);
        this.router.navigate(['canciones']);
        this.toastr.success(
          `La canción '${this.cancion.Nombre}' fue agregada con éxito`,
          'Canción Agregada'
        );
      },
      (err) => console.error(err)
    );
  }

  actualiza() {
    const params = this.activatedRoute.snapshot.params;
    this.Service.update(params['idCancion'], this.cancion).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/canciones']);
        this.toastr.info(
          `La canción '${this.cancion.Nombre}' fue actualizada con éxito`,
          'Canción Actualizada'
        );
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
}
