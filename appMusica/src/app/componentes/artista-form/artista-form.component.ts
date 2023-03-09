import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; //Para enviar a una ruta Especifica
/* ENTIDAD */
import { Artista } from 'src/app/modelos/Artista';
import { ArtistaService } from 'src/app/servicios/artista.service';
/* LLAVE FORANEA */
import { PaisService } from 'src/app/servicios/pais.service';
/* ALERTAS */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-artista-form',
  templateUrl: './artista-form.component.html',
  styleUrls: ['./artista-form.component.css'],
})
export class ArtistaFormComponent implements OnInit {
  form: FormGroup;
  @HostBinding('class') classes = 'row';

  artista: Artista = {
    idArtista: 0,
    Nombre: '',
    NombreArtistico: '',
    Genero: '',
    FechaNacimiento: '',
    FechaFinado: '',
    Estatura: 0,
    idNacionalidad: '',
    Instrumentos: '',
    TipoVoz: '',
    Foto: '',
  };
  Pais: any = [];
  edit: boolean = false;

  constructor(
    private Service: ArtistaService,
    private paisService: PaisService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      Nombre: ['', Validators.required],
      NombreArtistico: ['', Validators.required],
      Genero: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      FechaFinado: [],
      Estatura: [null, Validators.required],
      idNacionalidad: ['', Validators.required],
      Instrumentos: ['', Validators.required],
      TipoVoz: ['', Validators.required],
      Foto: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerPais();
    const params = this.activatedRoute.snapshot.params;
    if (params['idArtista']) {
      this.Service.getArtista(params['idArtista']).subscribe(
        (res) => {
          console.log(res); //Muestra en consola
          this.artista = res; //Muestra en el navegador
          this.edit = true; //Asignamos que es verdadero
        },
        (err) => console.error(err)
      );
    }
  }

  add() {
    this.Service.create(this.artista).subscribe(
      (res) => {
        //Llenamos el arreglo con la respuesta
        console.log(res);
        this.router.navigate(['artista']);
        this.toastr.success(
          `El artista '${this.artista.NombreArtistico}' fue agregado con éxito`,
          'Artista Agregado'
        );
      },
      (err) => console.error(err)
    );
  }

  actualiza() {
    const params = this.activatedRoute.snapshot.params;
    this.Service.update(params['idArtista'], this.artista).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/artista']);
        this.toastr.info(
          `El artista '${this.artista.NombreArtistico}' fue actualizado con éxito`,
          'Artista Actualizado'
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
