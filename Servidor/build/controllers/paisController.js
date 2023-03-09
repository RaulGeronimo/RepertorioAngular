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
class PaisController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pais = yield database_1.default.query('SELECT * FROM Pais ORDER BY Nombre');
            res.json(pais);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Pais SET ?', [req.body]);
            res.json({ message: 'Se guardo un Pais' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPais } = req.params;
            yield database_1.default.query('UPDATE Pais SET ? WHERE idPais = ?', [req.body, idPais]);
            res.json({ message: 'Se modifico un Pais' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPais } = req.params;
            yield database_1.default.query('DELETE FROM Pais WHERE idPais = ?', [idPais]);
            res.json({ message: 'Se elimino un Pais' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPais } = req.params;
            const album = yield database_1.default.query('SELECT * FROM Pais WHERE idPais = ?', [idPais]);
            if (album.length > 0) {
                return res.json(album[0]);
            }
            res.status(404).json({ message: 'No existe el Pais' });
        });
    }
}
const paisController = new PaisController(); //devuelve un objeto
exports.default = paisController; //importa la instancia
