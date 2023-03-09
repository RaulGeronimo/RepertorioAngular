import { Router } from "express";
import artista_grupoController from "../controllers/artista_grupoController";

class Artista_grupoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',artista_grupoController.lista);
        this.router.post('/', artista_grupoController.crear);
        this.router.put('/:Codigo', artista_grupoController.actualizar);
        this.router.delete('/:Codigo', artista_grupoController.eliminar);
        this.router.get('/:Codigo',artista_grupoController.buscar);
    }
}

const artista_grupoRoutes = new Artista_grupoRoutes();
export default artista_grupoRoutes.router;