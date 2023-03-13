import { query, Request, Response } from "express";
import pool from "../database";

class Canciones_albumController{
    public async lista(req: Request, res: Response){
        const grupo = await pool.query('SELECT Codigo, Nombre, Album, Duracion, Genero FROM Vista_CancionesAlbum');
        res.json(grupo);
    }

    public async crear(req: Request, res:Response){
        await pool.query('INSERT INTO Canciones_Album SET ?', [req.body]);
        res.json({message: 'Se guardo una Cancion al Album'});
    }

    public async actualizar(req: Request, res: Response){
        const { Codigo } = req.params;
        await pool.query('UPDATE Canciones_Album SET ? WHERE Codigo = ?', [req.body, Codigo]);
        res.json({message: 'Se modifico una Cancion del Album'});
    }

    public async eliminar(req: Request, res: Response){
        const { Codigo } = req.params;
        await pool.query('DELETE FROM Canciones_Album WHERE Codigo = ?', [Codigo]);
        res.json({message: 'Se elimino una Cancion del Album'});
    }

    public async buscar(req: Request, res: Response){
        const { Codigo } = req.params;
        const album = await pool.query('SELECT * FROM Canciones_Album WHERE Codigo = ?', [Codigo]);
        if(album.length > 0){
            return res.json(album[0]);
        }
        res.status(404).json({message: 'No existe la Cancion'});
    }
}

const canciones_albumController = new Canciones_albumController();
export default canciones_albumController;