"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paisController_1 = __importDefault(require("../controllers/paisController"));
class PaisRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', paisController_1.default.lista);
        this.router.post('/', paisController_1.default.crear);
        this.router.put('/:idPais', paisController_1.default.actualizar);
        this.router.delete('/:idPais', paisController_1.default.eliminar);
        this.router.get('/:idPais', paisController_1.default.buscar);
    }
}
const paisRoutes = new PaisRoutes();
exports.default = paisRoutes.router;
