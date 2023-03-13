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
class Artista_grupoController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const grupo = yield database_1.default.query('SELECT Codigo, NombreArtistico, Foto, FechaNacimiento, Edad, Instrumento, TipoVoz, Grupo, Periodo FROM Vista_GrupoIntegrantes');
            res.json(grupo);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Artista_Grupo SET ?', [req.body]);
            res.json({ message: 'Se guardo un Artista a un Grupo' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigo } = req.params;
            yield database_1.default.query('UPDATE Artista_Grupo SET ? WHERE Codigo = ?', [req.body, Codigo]);
            res.json({ message: 'Se modifico un Artista de Grupo' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigo } = req.params;
            yield database_1.default.query('DELETE FROM Artista_Grupo WHERE Codigo = ?', [Codigo]);
            res.json({ message: 'Se elimino un Artista del Grupo' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigo } = req.params;
            const album = yield database_1.default.query('SELECT *, DATE_FORMAT(FechaInicio, \'%Y-%m-%d\') AS FechaInicio FROM Artista_Grupo WHERE Codigo = ?', [Codigo]);
            if (album.length > 0) {
                return res.json(album[0]);
            }
            res.status(404).json({ message: 'No existe el Artista' });
        });
    }
}
const artista_grupoController = new Artista_grupoController();
exports.default = artista_grupoController;
