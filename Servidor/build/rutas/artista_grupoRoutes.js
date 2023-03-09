"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const artista_grupoController_1 = __importDefault(require("../controllers/artista_grupoController"));
class Artista_grupoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', artista_grupoController_1.default.lista);
        this.router.post('/', artista_grupoController_1.default.crear);
        this.router.put('/:Codigo', artista_grupoController_1.default.actualizar);
        this.router.delete('/:Codigo', artista_grupoController_1.default.eliminar);
        this.router.get('/:Codigo', artista_grupoController_1.default.buscar);
    }
}
const artista_grupoRoutes = new Artista_grupoRoutes();
exports.default = artista_grupoRoutes.router;
