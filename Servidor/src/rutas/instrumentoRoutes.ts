import { Router } from "express";
import instrumentoController from "../controllers/instrumentoController";

class InstrumentoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', instrumentoController.lista);
        this.router.post('/', instrumentoController.crear);
        this.router.put('/:idInstrumento', instrumentoController.actualizar);
        this.router.delete('/:idInstrumento', instrumentoController.eliminar);
        this.router.get('/:idInstrumento',instrumentoController.buscar);
    }
}

const instrumentoRoutes = new InstrumentoRoutes();
export default instrumentoRoutes.router;