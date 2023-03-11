import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; //Para enviar a una ruta Especifica
/* ENTIDAD */
import { Pais } from 'src/app/modelos/Pais';
import { PaisService } from 'src/app/servicios/pais.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.css'],
})
export class PaisFormComponent implements OnInit {
  form: FormGroup;
  @HostBinding('class') classes = 'row';

  pais: Pais = {
    idPais: 0,
    Nombre: '',
    Nacionalidad: '',
    Continente: '',
    Bandera: '',
  };

  edit: boolean = false;

  constructor(
    private paisService: PaisService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      Nombre: ['', Validators.required],
      Nacionalidad: ['', Validators.required],
      Continente: ['', Validators.required],
      Bandera: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['idPais']) {
      this.paisService.getPais(params['idPais']).subscribe(
        (res) => {
          console.log(res); //Muestra en consola
          this.pais = res; //Muestra en el navegador
          this.edit = true; //Asignamos que es verdadero
        },
        (err) => console.error(err)
      );
    }
  }

  add() {
    this.paisService.createPais(this.pais).subscribe(
      (res) => {
        //Llenamos el arreglo con la respuesta
        console.log(res);
        this.router.navigate(['pais']);
        this.toastr.success(
          `El pais '${this.pais.Nombre}' fue agregado con éxito`,
          'Pais Agregado'
        );
      },
      (err) => console.error(err)
    );
  }

  actualiza() {
    const params = this.activatedRoute.snapshot.params;
    this.paisService.updatePais(params['idPais'], this.pais).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/pais']);
        this.toastr.info(
          `El pais '${this.pais.Nombre}' fue actualizado con éxito`,
          'Pais Actualizado'
        );
      },
      (err) => console.error(err)
    );
  }
}
