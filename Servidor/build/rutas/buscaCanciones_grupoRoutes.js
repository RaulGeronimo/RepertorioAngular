"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const buscaCanciones_grupoController_1 = __importDefault(require("../controllers/buscaCanciones_grupoController"));
class BuscaCanciones_grupoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:idGrupo', buscaCanciones_grupoController_1.default.buscar);
    }
}
const buscaCanciones_grupoRoutes = new BuscaCanciones_grupoRoutes();
exports.default = buscaCanciones_grupoRoutes.router;
