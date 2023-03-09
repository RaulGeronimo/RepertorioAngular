import { Request, Response } from "express";
import pool from "../database";

class BuscaCanciones_grupoController{
    public async buscar(req: Request, res: Response){
        const { idGrupo } = req.params;
        const album = await pool.query('CALL obtener_canciones (?)', [idGrupo]);
        if(album.length > 0){
            return res.json(album[0]);
        }
        res.status(404).json({message: 'El grupo no contiene Canciones'});
    }
}

const buscaCanciones_grupoController = new BuscaCanciones_grupoController(); //devuelve un objeto
export default buscaCanciones_grupoController; //importa la instancia