import { Request, Response } from "express";
import pool from "../database";

class BuscaIntegrante_grupoController{
    public async buscar(req: Request, res: Response){
        const { idGrupo } = req.params;
        const grupo = await pool.query('CALL obtener_integrantes (?)', [idGrupo]);
        if(grupo.length > 0){
            return res.json(grupo[0]);
        }
        res.status(404).json({message: 'No contiene Integrantes'});
    }
}

const buscaIntegrante_grupoController = new BuscaIntegrante_grupoController(); //devuelve un objeto
export default buscaIntegrante_grupoController; //importa la instancia