import { Request, Response } from "express";
import pool from "../database";

class DisqueraController{
    public async lista(req: Request, res: Response){
        const disquera = await pool.query('SELECT * FROM Vista_Disquera');
        res.json(disquera);
    }

    public async crear(req: Request, res:Response){
        await pool.query('INSERT INTO Disquera SET ?', [req.body]);
        res.json({message: 'Se guardo una Disquera'});
    }

    public async actualizar(req: Request, res: Response){
        const { idDisquera } = req.params;
        await pool.query('UPDATE Disquera SET ? WHERE idDisquera = ?', [req.body, idDisquera]);
        res.json({message: 'Se modifico una Disquera'});
    }

    public async eliminar(req: Request, res: Response){
        const { idDisquera } = req.params;
        await pool.query('DELETE FROM Disquera WHERE idDisquera = ?', [idDisquera]);
        res.json({message: 'Se elimino una Disquera'});
    }

    public async buscar(req: Request, res: Response){
        const { idDisquera } = req.params;
        const disquera = await pool.query('SELECT *, DATE_FORMAT(Fundacion, \'%Y-%m-%d\') AS Fundacion FROM Disquera WHERE idDisquera = ?', [idDisquera]);
        if(disquera.length > 0){
            return res.json(disquera[0]);
        }
        res.status(404).json({message: 'No existe la Disquera'});
    }
}

const disqueraController = new DisqueraController(); //devuelve un objeto
export default disqueraController; //importa la instancia