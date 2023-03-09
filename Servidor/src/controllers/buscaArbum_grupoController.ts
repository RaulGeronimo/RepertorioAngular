import { Request, Response } from "express";
import pool from "../database";

class BuscaAlbum_grupoController{
    public async buscar(req: Request, res: Response){
        const { idGrupo } = req.params;
        const album = await pool.query('CALL obtener_album (?)', [idGrupo]);
        if(album.length > 0){
            return res.json(album[0]);
        }
        res.status(404).json({message: 'El grupo no contiene Albumes'});
    }
}

const buscaAlbum_grupoController = new BuscaAlbum_grupoController(); //devuelve un objeto
export default buscaAlbum_grupoController; //importa la instancia