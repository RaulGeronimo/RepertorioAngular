import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Importamos el modulo de http
import { HttpClientModule } from '@angular/common/http';
//Importamos los modulos de los formularios
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//Importamos el modulo de FormModule que va enlazar los input
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

/* APARTADOS */
import { PaisListComponent } from './componentes/pais-list/pais-list.component';
import { PaisFormComponent } from './componentes/pais-form/pais-form.component';

import { InstrumentoListComponent } from './componentes/instrumento-list/instrumento-list.component';
import { InstrumentoFormComponent } from './componentes/instrumento-form/instrumento-form.component';

import { ArtistaListComponent } from './componentes/artista-list/artista-list.component';
import { ArtistaFormComponent } from './componentes/artista-form/artista-form.component';

import { GruposFormComponent } from './componentes/grupos-form/grupos-form.component';
import { GruposListComponent } from './componentes/grupos-list/grupos-list.component';

import { ArtistaGrupoFormComponent } from './componentes/artista-grupo-form/artista-grupo-form.component';
import { ArtistaGrupoListComponent } from './componentes/artista-grupo-list/artista-grupo-list.component';

import { DisqueraFormComponent } from './componentes/disquera-form/disquera-form.component';
import { DisqueraListComponent } from './componentes/disquera-list/disquera-list.component';

import { AlbumListComponent } from './componentes/album-list/album-list.component';
import { AlbumFormComponent } from './componentes/album-form/album-form.component';

import { CancionesFormComponent } from './componentes/canciones-form/canciones-form.component';
import { CancionesListComponent } from './componentes/canciones-list/canciones-list.component';

import { CancionesAlbumListComponent } from './componentes/canciones-album-list/canciones-album-list.component';
import { CancionesAlbumFormComponent } from './componentes/canciones-album-form/canciones-album-form.component';

/* SERVICIOS */
import { PaisService } from './servicios/pais.service';
import { InstrumentosService } from './servicios/instrumentos.service';
import { ArtistaService } from './servicios/artista.service';
import { GruposService } from './servicios/grupos.service';
import { ArtistaGrupoService } from './servicios/artista-grupo.service';
import { DisqueraService } from './servicios/disquera.service';
import { AlbumService } from './servicios/album.service';
import { CancionesService } from './servicios/canciones.service';
import { CancionesAlbumService } from './servicios/canciones-album.service';

/* Busqueda */
import { BuscaCancionAlbumComponent } from './componentes/busca-cancion-album/busca-cancion-album.component';
import { BuscaCancionGrupoComponent } from './componentes/busca-cancion-grupo/busca-cancion-grupo.component';
import { BuscaAlbumGrupoComponent } from './componentes/busca-album-grupo/busca-album-grupo.component';
import { BuscaIntegrantesGrupoComponent } from './componentes/busca-integrantes-grupo/busca-integrantes-grupo.component';

import { BuscaAlbumGrupoService } from './servicios/busca-album-grupo.service';
import { BuscaCancionAlbumService } from './servicios/busca-cancion-album.service';
import { BuscaCancionGrupoService } from './servicios/busca-cancion-grupo.service';
import { BuscaIntegrantesGrupoService } from './servicios/busca-integrantes-grupo.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PaisListComponent,
    PaisFormComponent,
    InstrumentoListComponent,
    InstrumentoFormComponent,
    ArtistaListComponent,
    ArtistaFormComponent,
    GruposFormComponent,
    GruposListComponent,
    ArtistaGrupoFormComponent,
    ArtistaGrupoListComponent,
    DisqueraFormComponent,
    DisqueraListComponent,
    AlbumListComponent,
    AlbumFormComponent,
    CancionesFormComponent,
    CancionesListComponent,
    CancionesAlbumListComponent,
    CancionesAlbumFormComponent,
    BuscaAlbumGrupoComponent,
    BuscaCancionAlbumComponent,
    BuscaCancionGrupoComponent,
    BuscaIntegrantesGrupoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    Ng2SearchPipeModule
  ],
  providers: [
    PaisService,
    InstrumentosService,
    ArtistaService,
    GruposService,
    ArtistaGrupoService,
    DisqueraService,
    AlbumService,
    CancionesService,
    CancionesAlbumService,
    BuscaAlbumGrupoService,
    BuscaCancionAlbumService,
    BuscaCancionGrupoService,
    BuscaIntegrantesGrupoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}