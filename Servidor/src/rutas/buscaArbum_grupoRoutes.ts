import { Router } from "express";
import buscaAlbum_grupoController from "../controllers/buscaArbum_grupoController";

class BuscaAlbum_grupoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:idGrupo', buscaAlbum_grupoController.buscar);
    }
}

const buscaAlbum_grupoRoutes = new BuscaAlbum_grupoRoutes();
export default buscaAlbum_grupoRoutes.router;