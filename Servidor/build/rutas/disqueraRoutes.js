"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const disqueraController_1 = __importDefault(require("../controllers/disqueraController"));
class DisqueraRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', disqueraController_1.default.lista);
        this.router.post('/', disqueraController_1.default.crear);
        this.router.put('/:idDisquera', disqueraController_1.default.actualizar);
        this.router.delete('/:idDisquera', disqueraController_1.default.eliminar);
        this.router.get('/:idDisquera', disqueraController_1.default.buscar);
    }
}
const disqueraRoutes = new DisqueraRoutes();
exports.default = disqueraRoutes.router;
