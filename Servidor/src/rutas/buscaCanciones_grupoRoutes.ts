import { Router } from "express";
import buscaCanciones_grupoController from "../controllers/buscaCanciones_grupoController";

class BuscaCanciones_grupoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:idGrupo', buscaCanciones_grupoController.buscar);
    }
}

const buscaCanciones_grupoRoutes = new BuscaCanciones_grupoRoutes();
export default buscaCanciones_grupoRoutes.router;