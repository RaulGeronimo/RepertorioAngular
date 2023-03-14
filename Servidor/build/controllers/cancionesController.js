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
class CancionesController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const canciones = yield database_1.default.query('SELECT * FROM Vista_Canciones');
            res.json(canciones);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Canciones SET ?', [req.body]);
            res.json({ message: 'Se guardo una Cancion' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCancion } = req.params;
            yield database_1.default.query('UPDATE Canciones SET ? WHERE idCancion = ?', [req.body, idCancion]);
            res.json({ message: 'Se modifico una Cancion' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCancion } = req.params;
            yield database_1.default.query('DELETE FROM Canciones WHERE idCancion = ?', [idCancion]);
            res.json({ message: 'Se elimino una Cancion' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCancion } = req.params;
            const canciones = yield database_1.default.query('SELECT *, DATE_FORMAT(Publicacion, \'%Y-%m-%d\') AS Publicacion FROM Canciones WHERE idCancion = ?', [idCancion]);
            if (canciones.length > 0) {
                return res.json(canciones[0]);
            }
            res.status(404).json({ message: 'No existe la Cancion' });
        });
    }
}
const cancionesController = new CancionesController(); //devuelve un objeto
exports.default = cancionesController; //importa la instancia
