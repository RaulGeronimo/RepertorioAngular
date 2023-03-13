import { Request, Response } from "express";
import pool from "../database";

class Artista_grupoController{
    public async lista(req: Request, res: Response){
        const grupo = await pool.query('SELECT Codigo, NombreArtistico, Foto, FechaNacimiento, Edad, Instrumento, TipoVoz, Grupo, Periodo FROM Vista_GrupoIntegrantes');
        res.json(grupo);
    }

    public async crear(req: Request, res:Response){
        await pool.query('INSERT INTO Artista_Grupo SET ?', [req.body]);
        res.json({message: 'Se guardo un Artista a un Grupo'});
    }

    public async actualizar(req: Request, res: Response){
        const { Codigo } = req.params;
        await pool.query('UPDATE Artista_Grupo SET ? WHERE Codigo = ?', [req.body, Codigo]);
        res.json({message: 'Se modifico un Artista de Grupo'});
    }

    public async eliminar(req: Request, res: Response){
        const { Codigo } = req.params;
        await pool.query('DELETE FROM Artista_Grupo WHERE Codigo = ?', [Codigo]);
        res.json({message: 'Se elimino un Artista del Grupo'});
    }

    public async buscar(req: Request, res: Response){
        const { Codigo } = req.params;
        const album = await pool.query('SELECT *, DATE_FORMAT(FechaInicio, \'%Y-%m-%d\') AS FechaInicio FROM Artista_Grupo WHERE Codigo = ?', [Codigo]);
        if(album.length > 0){
            return res.json(album[0]);
        }
        res.status(404).json({message: 'No existe el Artista'});
    }
}

const artista_grupoController = new Artista_grupoController();
export default artista_grupoController;