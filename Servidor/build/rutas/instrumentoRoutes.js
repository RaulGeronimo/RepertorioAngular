"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instrumentoController_1 = __importDefault(require("../controllers/instrumentoController"));
class InstrumentoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', instrumentoController_1.default.lista);
        this.router.post('/', instrumentoController_1.default.crear);
        this.router.put('/:idInstrumento', instrumentoController_1.default.actualizar);
        this.router.delete('/:idInstrumento', instrumentoController_1.default.eliminar);
        this.router.get('/:idInstrumento', instrumentoController_1.default.buscar);
    }
}
const instrumentoRoutes = new InstrumentoRoutes();
exports.default = instrumentoRoutes.router;
