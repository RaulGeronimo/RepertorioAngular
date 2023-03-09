import { Request, Response } from "express";
import pool from "../database";

class BuscaCanciones_albumController{
    public async buscar(req: Request, res: Response){
        const { idAlbum } = req.params;
        const grupo = await pool.query('CALL obtener_cancionesAlbum (?)', [idAlbum]);
        if(grupo.length > 0){
            return res.json(grupo[0]);
        }
        res.status(404).json({message: 'No contiene Canciones'});
    }
}

const buscaCanciones_albumController = new BuscaCanciones_albumController(); //devuelve un objeto
export default buscaCanciones_albumController; //importa la instancia