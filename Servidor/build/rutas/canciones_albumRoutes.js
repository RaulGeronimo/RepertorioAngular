"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const canciones_albumController_1 = __importDefault(require("../controllers/canciones_albumController"));
class Canciones_AlbumRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', canciones_albumController_1.default.lista);
        this.router.post('/', canciones_albumController_1.default.crear);
        this.router.put('/:Codigo', canciones_albumController_1.default.actualizar);
        this.router.delete('/:Codigo', canciones_albumController_1.default.eliminar);
        this.router.get('/:Codigo', canciones_albumController_1.default.buscar);
    }
}
const canciones_AlbumRoutes = new Canciones_AlbumRoutes();
exports.default = canciones_AlbumRoutes.router;
