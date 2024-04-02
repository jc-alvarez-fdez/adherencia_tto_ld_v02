import { Application, Request, Response } from 'express';
import TomaDiaria from '../models/toma_diaria_model';


// Muestra todas las tomas diarias
export const getTomasDiarias = async (req: Request, res: Response) => {
    const listTomasDiarias = await TomaDiaria.findAll();
    res.json(listTomasDiarias);
}

// Muestra toma diaria por id
export const getTomaDiaria = async (req: Request, res: Response) => {
    const { id } = req.params;
    const tomaDiaria = await TomaDiaria.findByPk(id);

    if (tomaDiaria) {
        res.json(tomaDiaria);
    } else {
        res.status(404).json({
            msg: `No existe una toma diaria con el id ${id}`
        })
    };
}


// Elimina toma diaria por id
export const deleteTomaDiaria = async (req: Request, res: Response) => {
    const { id } = req.params;
    const tomaDiaria = await TomaDiaria.findByPk(id);
    if (!tomaDiaria) {
        res.status(404).json({
            msg: `No existe una tomadiaria con el id ${id}`
        })
    } else {
        await tomaDiaria.destroy();
        res.json({
            msg: `La toma diaria se ha eliminado`
        })

    }
}



// Añadir toma diaria
export const addTomaDiaria = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await TomaDiaria.create(body);

        res.json({
            msg: 'La toma diaria se ha añadido',
            body
        });

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error, póngase en contacto con soporte',
        });
    }
}    

// Modificar toma diaria
export const updateTomaDiaria = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const tomaDiaria = await TomaDiaria.findByPk(id);

        if (tomaDiaria) {
            await tomaDiaria.update(body);
            res.json({
                msg: `La toma diaria se ha actualizado`
            })
        } else {
            res.status(404).json({
                msg: `No existe una toma diaria con el id ${id}`
            })
        } 
    } 
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error, póngase en contacto con soporte',
        });
    }
}

