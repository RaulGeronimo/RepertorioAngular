import { Request, Response } from "express";
import pool from "../database";

class CancionesController{
    public async lista(req: Request, res: Response){
        const canciones = await pool.query('SELECT idCancion, Nombre, Grupo, Duracion, Publicacion, Genero FROM Vista_Canciones');
        res.json(canciones);
    }

    public async crear(req: Request, res:Response){
        await pool.query('INSERT INTO Canciones SET ?', [req.body]);
        res.json({message: 'Se guardo una Cancion'});
    }

    public async actualizar(req: Request, res: Response){
        const { idCancion } = req.params;
        await pool.query('UPDATE Canciones SET ? WHERE idCancion = ?', [req.body, idCancion]);
        res.json({message: 'Se modifico una Cancion'});
    }

    public async eliminar(req: Request, res: Response){
        const { idCancion } = req.params;
        await pool.query('DELETE FROM Canciones WHERE idCancion = ?', [idCancion]);
        res.json({message: 'Se elimino una Cancion'});
    }

    public async buscar(req: Request, res: Response){
        const { idCancion } = req.params;
        const canciones = await pool.query('SELECT *, DATE_FORMAT(Publicacion, \'%Y-%m-%d\') AS Publicacion FROM Canciones WHERE idCancion = ?', [idCancion]);
        if(canciones.length > 0){
            return res.json(canciones[0]);
        }
        res.status(404).json({message: 'No existe la Cancion'});
    }
}

const cancionesController = new CancionesController(); //devuelve un objeto
export default cancionesController; //importa la instancia