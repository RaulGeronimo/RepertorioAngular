import { Request, Response } from "express";
import pool from "../database";

class ArtistaController{
    public async lista(req: Request, res: Response){
        const artista = await pool.query('SELECT idArtista, Foto, NombreArtistico, FechaNacimiento, Edad, Instrumentos, TipoVoz, Pais FROM Vista_Artista');
        res.json(artista);
    }

    public async crear(req: Request, res:Response){
        await pool.query('INSERT INTO Artista SET ?', [req.body]);
        res.json({message: 'Se guardo un Artista'});
    }

    public async actualizar(req: Request, res: Response){
        const { idArtista } = req.params;
        await pool.query('UPDATE Artista SET ? WHERE idArtista = ?', [req.body, idArtista]);
        res.json({message: 'Se modifico un Artista'});
    }

    public async eliminar(req: Request, res: Response){
        const { idArtista } = req.params;
        await pool.query('DELETE FROM Artista WHERE idArtista = ?', [idArtista]);
        res.json({message: 'Se elimino un Artista'});
    }

    public async buscar(req: Request, res: Response){
        const { idArtista } = req.params;
        const album = await pool.query('SELECT *, DATE_FORMAT(FechaNacimiento, \'%Y-%m-%d\') AS FechaNacimiento FROM Artista WHERE idArtista = ?', [idArtista]);
        if(album.length > 0){
            return res.json(album[0]);
        }
        res.status(404).json({message: 'No existe el Artista'});
    }
}

const artistaController = new ArtistaController(); //devuelve un objeto
export default artistaController; //importa la instancia