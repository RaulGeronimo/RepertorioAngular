import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; //Para enviar a una ruta Especifica
/* ENTIDAD */
import { Disquera } from 'src/app/modelos/Disquera';
import { DisqueraService } from 'src/app/servicios/disquera.service';
/* LLAVE FORANEA */
import { PaisService } from 'src/app/servicios/pais.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-disquera-form',
  templateUrl: './disquera-form.component.html',
  styleUrls: ['./disquera-form.component.css'],
})
export class DisqueraFormComponent implements OnInit {
  form: FormGroup;
  @HostBinding('class') classes = 'row';

  disquera: Disquera = {
    idDisquera: 0,
    Nombre: '',
    Fundacion: '',
    Fundador: '',
    Generos: '',
    idPais: '',
    Logo: '',
  };
  Pais: any = [];
  edit: boolean = false;

  constructor(
    private Service: DisqueraService,
    private paisService: PaisService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      Nombre: ['', Validators.required],
      Fundacion: ['', Validators.required],
      Fundador: ['', Validators.required],
      Generos: ['', Validators.required],
      idPais: ['', Validators.required],
      Logo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerPais();
    const params = this.activatedRoute.snapshot.params;
    if (params['idDisquera']) {
      this.Service.getDisquera(params['idDisquera']).subscribe(
        (res) => {
          console.log(res); //Muestra en consola
          this.disquera = res; //Muestra en el navegador
          this.edit = true; //Asignamos que es verdadero
        },
        (err) => console.error(err)
      );
    }
  }

  add() {
    this.Service.create(this.disquera).subscribe(
      (res) => {
        //Llenamos el arreglo con la respuesta
        console.log(res);
        this.router.navigate(['disquera']);
        this.toastr.success(
          `La disquera '${this.disquera.Nombre}' fue agregada con éxito`,
          'Disquera Agregada'
        );
      },
      (err) => console.error(err)
    );
  }

  actualiza() {
    const params = this.activatedRoute.snapshot.params;
    this.Service.update(params['idDisquera'], this.disquera).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/disquera']);
        this.toastr.info(
          `La disquera '${this.disquera.Nombre}' fue actualizada con éxito`,
          'Disquera Actualizada'
        );
      },
      (err) => console.error(err)
    );
  }

  obtenerPais() {
    this.paisService.getPaises().subscribe(
      (res) => {
        //Llena el arreglo con la respuesta que enviamos
        this.Pais = res;
      },
      (err) => console.error(err)
    );
  }
}
