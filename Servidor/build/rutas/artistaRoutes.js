"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const artistaController_1 = __importDefault(require("../controllers/artistaController"));
class ArtistaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', artistaController_1.default.lista);
        this.router.post('/', artistaController_1.default.crear);
        this.router.put('/:idArtista', artistaController_1.default.actualizar);
        this.router.delete('/:idArtista', artistaController_1.default.eliminar);
        this.router.get('/:idArtista', artistaController_1.default.buscar);
    }
}
const artistaRoutes = new ArtistaRoutes();
exports.default = artistaRoutes.router;
