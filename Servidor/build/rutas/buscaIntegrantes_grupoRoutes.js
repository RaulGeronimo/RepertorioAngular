"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const buscaIntegrantes_grupoController_1 = __importDefault(require("../controllers/buscaIntegrantes_grupoController"));
class BuscaIntegrantes_grupoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:idGrupo', buscaIntegrantes_grupoController_1.default.buscar);
    }
}
const buscaIntegrantes_grupoRoutes = new BuscaIntegrantes_grupoRoutes();
exports.default = buscaIntegrantes_grupoRoutes.router;
