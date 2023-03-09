import { Router } from "express";
import artistaController from "../controllers/artistaController";

class ArtistaRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', artistaController.lista);
        this.router.post('/', artistaController.crear);
        this.router.put('/:idArtista', artistaController.actualizar);
        this.router.delete('/:idArtista', artistaController.eliminar);
        this.router.get('/:idArtista',artistaController.buscar);
    }
}

const artistaRoutes = new ArtistaRoutes();
export default artistaRoutes.router;