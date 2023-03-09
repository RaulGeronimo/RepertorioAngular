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
class DisqueraController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const disquera = yield database_1.default.query('SELECT * FROM Vista_Disquera');
            res.json(disquera);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Disquera SET ?', [req.body]);
            res.json({ message: 'Se guardo una Disquera' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idDisquera } = req.params;
            yield database_1.default.query('UPDATE Disquera SET ? WHERE idDisquera = ?', [req.body, idDisquera]);
            res.json({ message: 'Se modifico una Disquera' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idDisquera } = req.params;
            yield database_1.default.query('DELETE FROM Disquera WHERE idDisquera = ?', [idDisquera]);
            res.json({ message: 'Se elimino una Disquera' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idDisquera } = req.params;
            const disquera = yield database_1.default.query('SELECT *, DATE_FORMAT(Fundacion, \'%Y-%m-%d\') AS Fundacion FROM Disquera WHERE idDisquera = ?', [idDisquera]);
            if (disquera.length > 0) {
                return res.json(disquera[0]);
            }
            res.status(404).json({ message: 'No existe la Disquera' });
        });
    }
}
const disqueraController = new DisqueraController(); //devuelve un objeto
exports.default = disqueraController; //importa la instancia
