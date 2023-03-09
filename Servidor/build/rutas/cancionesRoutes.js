"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cancionesController_1 = __importDefault(require("../controllers/cancionesController"));
class CancionesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', cancionesController_1.default.lista);
        this.router.post('/', cancionesController_1.default.crear);
        this.router.put('/:idCancion', cancionesController_1.default.actualizar);
        this.router.delete('/:idCancion', cancionesController_1.default.eliminar);
        this.router.get('/:idCancion', cancionesController_1.default.buscar);
    }
}
const cancionesRoutes = new CancionesRoutes();
exports.default = cancionesRoutes.router;
