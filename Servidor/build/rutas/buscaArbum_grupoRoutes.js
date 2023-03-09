"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const buscaArbum_grupoController_1 = __importDefault(require("../controllers/buscaArbum_grupoController"));
class BuscaAlbum_grupoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:idGrupo', buscaArbum_grupoController_1.default.buscar);
    }
}
const buscaAlbum_grupoRoutes = new BuscaAlbum_grupoRoutes();
exports.default = buscaAlbum_grupoRoutes.router;
