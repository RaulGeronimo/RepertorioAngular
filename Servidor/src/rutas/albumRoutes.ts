import { Router } from "express";
import albumController from "../controllers/albumController";

class AlbumRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', albumController.lista);
        this.router.post('/', albumController.crear);
        this.router.put('/:idAlbum', albumController.actualizar);
        this.router.delete('/:idAlbum', albumController.eliminar);
        this.router.get('/:idAlbum',albumController.buscar);
    }
}

const albumRoutes = new AlbumRoutes();
export default albumRoutes.router;