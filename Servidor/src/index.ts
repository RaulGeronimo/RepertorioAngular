import express, { Application } from 'express';

import morgan from 'morgan';
import cors from 'cors';

//RUTAS
import indexRoutes from './rutas/indexRoutes';

/* CRUD */
import paisRoutes from './rutas/paisRoutes';
import instrumentoRoutes from './rutas/instrumentoRoutes';
import artistaRoutes from './rutas/artistaRoutes';
import grupoRoutes from './rutas/grupoRoutes';
import disqueraRoutes from './rutas/disqueraRoutes';
import albumRoutes from './rutas/albumRoutes';
import cancionesRoutes from './rutas/cancionesRoutes';

/* TABLAS PUENTE */
import artista_grupoRoutes from './rutas/artista_grupoRoutes';
import canciones_albumRoutes from './rutas/canciones_albumRoutes';

/* BUSQUEDA */
import buscaArbum_grupoRoutes from './rutas/buscaArbum_grupoRoutes';
import buscaCanciones_grupoRoutes from './rutas/buscaCanciones_grupoRoutes';
import buscaCancion_AlbumRoutes from './rutas/buscaCancion_AlbumRoutes';
import buscaIntegrantes_grupoRoutes from './rutas/buscaIntegrantes_grupoRoutes';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.rutas();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 5000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); //puede ser leidos por un json
        this.app.use(express.urlencoded({extended: false})); //para tener mejor comunicacion con archivos HTML
    }

    rutas(): void{
        this.app.use(indexRoutes);
        /* PAIS / NACIONALIDAD */
        this.app.use('/app/pais', paisRoutes);
        /* INSTRUMENTO */
        this.app.use('/app/instrumento', instrumentoRoutes);
        /* ARTISTA */
        this.app.use('/app/artista', artistaRoutes);
        /* GRUPO */
        this.app.use('/app/grupo', grupoRoutes);
        /* ARTISTA GRUPO */
        this.app.use('/app/artista_Grupo', artista_grupoRoutes);
        /* DISQUERA */
        this.app.use('/app/disquera', disqueraRoutes);
        /* ALBUM */
        this.app.use('/app/album', albumRoutes);
        /* CANCIONES */
        this.app.use('/app/canciones', cancionesRoutes);
        /* CANCIONES ALBUM */
        this.app.use('/app/canciones_Album', canciones_albumRoutes);

        /* BUSCAR ALBUM GRUPO */
        this.app.use('/app/buscaAlbum_Grupo', buscaArbum_grupoRoutes);
        /* BUSCAR CANCIONES GRUPO */
        this.app.use('/app/buscaCancion_Grupo', buscaCanciones_grupoRoutes);
        /* BUSCAR CANCIONES ALBUM */
        this.app.use('/app/buscaCancion_Album', buscaCancion_AlbumRoutes);
        /* BUSCAR INTEGRANTES GRUPO */
        this.app.use('/app/buscaIntegrante_Grupo', buscaIntegrantes_grupoRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();