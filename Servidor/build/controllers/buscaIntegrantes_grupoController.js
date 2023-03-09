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
class BuscaIntegrante_grupoController {
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idGrupo } = req.params;
            const grupo = yield database_1.default.query('CALL obtener_integrantes (?)', [idGrupo]);
            if (grupo.length > 0) {
                return res.json(grupo[0]);
            }
            res.status(404).json({ message: 'No contiene Integrantes' });
        });
    }
}
const buscaIntegrante_grupoController = new BuscaIntegrante_grupoController(); //devuelve un objeto
exports.default = buscaIntegrante_grupoController; //importa la instancia
