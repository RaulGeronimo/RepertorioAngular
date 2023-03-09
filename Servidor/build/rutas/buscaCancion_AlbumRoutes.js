"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const buscaCancion_AlbumController_1 = __importDefault(require("../controllers/buscaCancion_AlbumController"));
class BuscaCanciones_albumRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:idAlbum', buscaCancion_AlbumController_1.default.buscar);
    }
}
const buscaCanciones_albumRoutes = new BuscaCanciones_albumRoutes();
exports.default = buscaCanciones_albumRoutes.router;
