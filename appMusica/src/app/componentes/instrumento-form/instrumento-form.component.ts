import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; //Para enviar a una ruta Especifica
/* ENTIDAD */
import { Instrumentos } from 'src/app/modelos/Instrumentos';
import { InstrumentosService } from 'src/app/servicios/instrumentos.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-instrumento-form',
  templateUrl: './instrumento-form.component.html',
  styleUrls: ['./instrumento-form.component.css'],
})
export class InstrumentoFormComponent implements OnInit {
  form: FormGroup;
  @HostBinding('class') classes = 'row';

  instrumentos: Instrumentos = {
    idInstrumento: 0,
    Nombre: '',
    Descripcion: '',
    Foto: '',
  };

  edit: boolean = false;

  constructor(
    private instrumentosService: InstrumentosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      Nombre: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Foto: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['idInstrumento']) {
      this.instrumentosService
        .getInstrumento(params['idInstrumento'])
        .subscribe(
          (res) => {
            console.log(res); //Muestra en consola
            this.instrumentos = res; //Muestra en el navegador
            this.edit = true; //Asignamos que es verdadero
          },
          (err) => console.error(err)
        );
    }
  }

  add() {
    this.instrumentosService.createInstrumento(this.instrumentos).subscribe(
      (res) => {
        //Llenamos el arreglo con la respuesta
        console.log(res);
        this.router.navigate(['instrumento']);
        this.toastr.success(
          `El instrumento '${this.instrumentos.Nombre}' fue agregado con éxito`,
          'Instrumento Agregado'
        );
      },
      (err) => console.error(err)
    );
  }

  actualiza() {
    const params = this.activatedRoute.snapshot.params;
    this.instrumentosService
      .updateInstrumento(params['idInstrumento'], this.instrumentos)
      .subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/instrumento']);
          this.toastr.info(
            `El instrumento '${this.instrumentos.Nombre}' fue actualizado con éxito`,
            'Instrumento Actualizado'
          );
        },
        (err) => console.error(err)
      );
  }
}
