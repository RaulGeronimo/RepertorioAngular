import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; //Para enviar a una ruta Especifica
/* ENTIDAD */
import { Grupos } from 'src/app/modelos/Grupos';
import { GruposService } from 'src/app/servicios/grupos.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grupos-form',
  templateUrl: './grupos-form.component.html',
  styleUrls: ['./grupos-form.component.css'],
})
export class GruposFormComponent implements OnInit {
  form: FormGroup;

  @HostBinding('class') classes = 'row';

  grupo: Grupos = {
    idGrupo: 0,
    Nombre: '',
    Origen: '',
    Genero: '',
    Inicio: '',
    Fin: '',
    Sellos: '',
    Estado: '',
    SitioWeb: '',
    Idioma: '',
    Logo: '',
  };

  edit: boolean = false;

  constructor(
    private Service: GruposService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      Nombre: ['', Validators.required],
      Origen: ['', Validators.required],
      Genero: ['', Validators.required],
      Inicio: ['', Validators.required],
      Fin: [],
      Sellos: ['', Validators.required],
      Estado: ['', Validators.required],
      SitioWeb: ['', Validators.required],
      Idioma: ['', Validators.required],
      Logo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['idGrupo']) {
      this.Service.getGrupo(params['idGrupo']).subscribe(
        (res) => {
          console.log(res); //Muestra en consola
          this.grupo = res; //Muestra en el navegador
          this.edit = true; //Asignamos que es verdadero
        },
        (err) => console.error(err)
      );
    }
  }

  add() {
    this.Service.create(this.grupo).subscribe(
      (res) => {
        //Llenamos el arreglo con la respuesta
        console.log(res);
        this.router.navigate(['grupo']);
        this.toastr.success(
          `El grupo '${this.grupo.Nombre}' fue agregado con éxito`,
          'Grupo Agregado'
        );
      },
      (err) => console.error(err)
    );
  }

  actualiza() {
    const params = this.activatedRoute.snapshot.params;
    this.Service.update(params['idGrupo'], this.grupo).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/grupo']);
        this.toastr.info(
          `El grupo '${this.grupo.Nombre}' fue actualizado con éxito`,
          'Grupo Actualizado'
        );
      },
      (err) => console.error(err)
    );
  }
}
