import { Router } from "express";
import cancionesController from "../controllers/cancionesController";

class CancionesRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', cancionesController.lista);
        this.router.post('/', cancionesController.crear);
        this.router.put('/:idCancion', cancionesController.actualizar);
        this.router.delete('/:idCancion', cancionesController.eliminar);
        this.router.get('/:idCancion',cancionesController.buscar);
    }
}

const cancionesRoutes = new CancionesRoutes();
export default cancionesRoutes.router;