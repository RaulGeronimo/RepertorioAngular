"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class AlbumController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const album = yield database_1.default.query('SELECT * FROM Vista_Album');
            res.json(album);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Album SET ?', [req.body]);
            res.json({ message: 'Se guardo un Album' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAlbum } = req.params;
            yield database_1.default.query('UPDATE Album SET ? WHERE idAlbum = ?', [req.body, idAlbum]);
            res.json({ message: 'Se modifico un Album' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAlbum } = req.params;
            yield database_1.default.query('DELETE FROM Album WHERE idAlbum = ?', [idAlbum]);
            res.json({ message: 'Se elimino un Album' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAlbum } = req.params;
            /* const album = await pool.query('SELECT * FROM Vista_Album WHERE idAlbum = ?', [idAlbum]); */
            const album = yield database_1.default.query('SELECT *, DATE_FORMAT(Lanzamiento, \'%Y-%m-%d\') AS Lanzamiento FROM Album WHERE idAlbum = ?', [idAlbum]);
            if (album.length > 0) {
                return res.json(album[0]);
            }
            res.status(404).json({ message: 'No existe el Album' });
        });
    }
}
const albumController = new AlbumController(); //devuelve un objeto
exports.default = albumController; //importa la instancia
