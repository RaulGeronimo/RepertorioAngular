"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grupoController_1 = __importDefault(require("../controllers/grupoController"));
class GrupoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', grupoController_1.default.lista);
        this.router.post('/', grupoController_1.default.crear);
        this.router.put('/:idGrupo', grupoController_1.default.actualizar);
        this.router.delete('/:idGrupo', grupoController_1.default.eliminar);
        this.router.get('/:idGrupo', grupoController_1.default.buscar);
    }
}
const grupoRoutes = new GrupoRoutes();
exports.default = grupoRoutes.router;
