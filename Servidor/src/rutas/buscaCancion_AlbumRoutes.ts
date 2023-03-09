import { Router } from "express";
import buscaCanciones_albumController from "../controllers/buscaCancion_AlbumController";
class BuscaCanciones_albumRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:idAlbum', buscaCanciones_albumController.buscar);
    }
}

const buscaCanciones_albumRoutes = new BuscaCanciones_albumRoutes();
export default buscaCanciones_albumRoutes.router;