//Importacion que permite definir las rutas de la app
import { NgModule } from '@angular/core';
//Importamos el archivo que viene en la ruta sig.
import { RouterModule, Routes } from '@angular/router';

//Importacion de las Listas
import { PaisListComponent } from './componentes/pais-list/pais-list.component';
import { InstrumentoListComponent } from './componentes/instrumento-list/instrumento-list.component';
import { ArtistaListComponent } from './componentes/artista-list/artista-list.component';

//Importamos los Formularios
import { PaisFormComponent } from './componentes/pais-form/pais-form.component';
import { InstrumentoFormComponent } from './componentes/instrumento-form/instrumento-form.component';
import { ArtistaFormComponent } from './componentes/artista-form/artista-form.component';

const routes: Routes = [
  //Creacion de los Objetos
  /* ARTISTA */
  {
    path: '',
    redirectTo: '/artista',
    pathMatch: 'full',
  },
  {
    path: 'artista', //Se creo la ruta para abrir un componente
    component: ArtistaListComponent,
  },
  {
    path: 'artista/agregar',
    component: ArtistaFormComponent,
  },
  {
    path: 'artista/actualizar/:idArtista',
    component: ArtistaFormComponent,
  },

  /* INSTRUMENTOS */
  {
    path: '',
    redirectTo: '/instrumento',
    pathMatch: 'full',
  },
  {
    path: 'instrumento', //Se creo la ruta para abrir un componente
    component: InstrumentoListComponent,
  },
  {
    path: 'instrumento/agregar',
    component: InstrumentoFormComponent,
  },
  {
    path: 'instrumento/actualizar/:idInstrumento',
    component: InstrumentoFormComponent,
  },

  /* PAIS */
  {
    path: '',
    redirectTo: '/pais',
    pathMatch: 'full',
  },
  {
    path: 'pais', //Se creo la ruta para abrir un componente
    component: PaisListComponent,
  },
  {
    path: 'pais/agregar',
    component: PaisFormComponent,
  },
  {
    path: 'pais/actualizar/:idPais',
    component: PaisFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
