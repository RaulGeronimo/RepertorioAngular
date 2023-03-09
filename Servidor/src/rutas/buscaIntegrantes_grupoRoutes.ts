import { Router } from "express";
import buscaIntegrante_grupoController from "../controllers/buscaIntegrantes_grupoController";

class BuscaIntegrantes_grupoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:idGrupo', buscaIntegrante_grupoController.buscar);
    }
}

const buscaIntegrantes_grupoRoutes = new BuscaIntegrantes_grupoRoutes();
export default buscaIntegrantes_grupoRoutes.router;