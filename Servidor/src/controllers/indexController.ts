import { Request, Response } from "express";

class IndexController{
    public index(req: Request, res: Response){
        res.json({text: 'Servidor'});
    }
}

export const indexController = new IndexController();