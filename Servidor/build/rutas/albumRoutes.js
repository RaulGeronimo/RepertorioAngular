"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const albumController_1 = __importDefault(require("../controllers/albumController"));
class AlbumRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', albumController_1.default.lista);
        this.router.post('/', albumController_1.default.crear);
        this.router.put('/:idAlbum', albumController_1.default.actualizar);
        this.router.delete('/:idAlbum', albumController_1.default.eliminar);
        this.router.get('/:idAlbum', albumController_1.default.buscar);
    }
}
const albumRoutes = new AlbumRoutes();
exports.default = albumRoutes.router;
