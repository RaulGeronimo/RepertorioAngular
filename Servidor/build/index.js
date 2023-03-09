"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//RUTAS
const indexRoutes_1 = __importDefault(require("./rutas/indexRoutes"));
/* CRUD */
const paisRoutes_1 = __importDefault(require("./rutas/paisRoutes"));
const instrumentoRoutes_1 = __importDefault(require("./rutas/instrumentoRoutes"));
const artistaRoutes_1 = __importDefault(require("./rutas/artistaRoutes"));
const grupoRoutes_1 = __importDefault(require("./rutas/grupoRoutes"));
const disqueraRoutes_1 = __importDefault(require("./rutas/disqueraRoutes"));
const albumRoutes_1 = __importDefault(require("./rutas/albumRoutes"));
const cancionesRoutes_1 = __importDefault(require("./rutas/cancionesRoutes"));
/* TABLAS PUENTE */
const artista_grupoRoutes_1 = __importDefault(require("./rutas/artista_grupoRoutes"));
const canciones_albumRoutes_1 = __importDefault(require("./rutas/canciones_albumRoutes"));
/* BUSQUEDA */
const buscaArbum_grupoRoutes_1 = __importDefault(require("./rutas/buscaArbum_grupoRoutes"));
const buscaCanciones_grupoRoutes_1 = __importDefault(require("./rutas/buscaCanciones_grupoRoutes"));
const buscaCancion_AlbumRoutes_1 = __importDefault(require("./rutas/buscaCancion_AlbumRoutes"));
const buscaIntegrantes_grupoRoutes_1 = __importDefault(require("./rutas/buscaIntegrantes_grupoRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.rutas();
    }
    config() {
        this.app.set('port', process.env.PORT || 5000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); //puede ser leidos por un json
        this.app.use(express_1.default.urlencoded({ extended: false })); //para tener mejor comunicacion con archivos HTML
    }
    rutas() {
        this.app.use(indexRoutes_1.default);
        /* PAIS / NACIONALIDAD */
        this.app.use('/app/pais', paisRoutes_1.default);
        /* INSTRUMENTO */
        this.app.use('/app/instrumento', instrumentoRoutes_1.default);
        /* ARTISTA */
        this.app.use('/app/artista', artistaRoutes_1.default);
        /* GRUPO */
        this.app.use('/app/grupo', grupoRoutes_1.default);
        /* ARTISTA GRUPO */
        this.app.use('/app/artista_Grupo', artista_grupoRoutes_1.default);
        /* DISQUERA */
        this.app.use('/app/disquera', disqueraRoutes_1.default);
        /* ALBUM */
        this.app.use('/app/album', albumRoutes_1.default);
        /* CANCIONES */
        this.app.use('/app/canciones', cancionesRoutes_1.default);
        /* CANCIONES ALBUM */
        this.app.use('/app/canciones_Album', canciones_albumRoutes_1.default);
        /* BUSCAR ALBUM GRUPO */
        this.app.use('/app/buscaAlbum_Grupo', buscaArbum_grupoRoutes_1.default);
        /* BUSCAR CANCIONES GRUPO */
        this.app.use('/app/buscaCancion_Grupo', buscaCanciones_grupoRoutes_1.default);
        /* BUSCAR CANCIONES ALBUM */
        this.app.use('/app/buscaCancion_Album', buscaCancion_AlbumRoutes_1.default);
        /* BUSCAR INTEGRANTES GRUPO */
        this.app.use('/app/buscaIntegrante_Grupo', buscaIntegrantes_grupoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
