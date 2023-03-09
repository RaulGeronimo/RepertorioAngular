import { Router } from "express";
import canciones_albumController from "../controllers/canciones_albumController";

class Canciones_AlbumRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',canciones_albumController.lista);
        this.router.post('/', canciones_albumController.crear);
        this.router.put('/:Codigo', canciones_albumController.actualizar);
        this.router.delete('/:Codigo', canciones_albumController.eliminar);
        this.router.get('/:Codigo',canciones_albumController.buscar);
    }
}

const canciones_AlbumRoutes = new Canciones_AlbumRoutes();
export default canciones_AlbumRoutes.router;