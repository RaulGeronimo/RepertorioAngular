import { Router } from "express";
import disqueraController from "../controllers/disqueraController";

class DisqueraRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', disqueraController.lista);
        this.router.post('/', disqueraController.crear);
        this.router.put('/:idDisquera', disqueraController.actualizar);
        this.router.delete('/:idDisquera', disqueraController.eliminar);
        this.router.get('/:idDisquera',disqueraController.buscar);
    }
}

const disqueraRoutes = new DisqueraRoutes();
export default disqueraRoutes.router;