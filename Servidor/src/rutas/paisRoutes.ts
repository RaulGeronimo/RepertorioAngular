import { Router } from "express";
import paisController from "../controllers/paisController";

class PaisRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', paisController.lista);
        this.router.post('/', paisController.crear);
        this.router.put('/:idPais', paisController.actualizar);
        this.router.delete('/:idPais', paisController.eliminar);
        this.router.get('/:idPais',paisController.buscar);
    }
}

const paisRoutes = new PaisRoutes();
export default paisRoutes.router;