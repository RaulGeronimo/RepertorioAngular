//Importacion que permite definir las rutas de la app
import { NgModule } from '@angular/core';
//Importamos el archivo que viene en la ruta sig.
import { RouterModule, Routes } from '@angular/router';

//Importacion de las Listas
import { PaisListComponent } from './componentes/pais-list/pais-list.component';

//Importamos los Formularios
import { PaisFormComponent } from './componentes/pais-form/pais-form.component';

const routes: Routes = [
  //Creacion de los Objetos
  /* PAIS */
  {
    path: '',
    redirectTo: '/pais',
    pathMatch: 'full'
  },
  {
    path: 'pais', //Se creo la ruta para abrir un componente
    component: PaisListComponent
  },
  {
    path: 'pais/agregar',
    component: PaisFormComponent,
  },
  {
    path: 'pais/actualizar/:idPais',
    component: PaisFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
