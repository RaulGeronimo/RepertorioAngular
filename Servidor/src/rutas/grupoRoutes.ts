import { Router } from "express";
import grupoController from "../controllers/grupoController";

class GrupoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', grupoController.lista);
        this.router.post('/', grupoController.crear);
        this.router.put('/:idGrupo', grupoController.actualizar);
        this.router.delete('/:idGrupo', grupoController.eliminar);
        this.router.get('/:idGrupo',grupoController.buscar);
    }
}

const grupoRoutes = new GrupoRoutes();
export default grupoRoutes.router;