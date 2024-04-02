import { Application, Request, Response } from 'express';
import Administracion from '../models/administracion_model';

// Muestra todas las administraciones
export const getAdministraciones = async (req: Request, res: Response) => {
    const listAdministraciones = await Administracion.findAll();
    res.json(listAdministraciones);
}

// Muestra administracion por id
export const getAdministracion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const administracion = await Administracion.findByPk(id);

    if (administracion) {
        res.json(administracion);
    } else {
        res.status(404).json({
            msg: `No existe un administracion con el id ${id}`
        })
    };
}


// Elimina administracion por id
export const deleteAdministracion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const administracion = await Administracion.findByPk(id);
    if (!administracion) {
        res.status(404).json({
            msg: `No existe un administracion con el id ${id}`
        })
    } else {
        await administracion.destroy();
        res.json({
            msg: `El administracion se ha eliminado`
        })

    }
}



// Añadir administracion
export const addAdministracion = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Administracion.create(body);

        res.json({
            msg: 'El administracion se ha añadido',
            body
        });

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error, póngase en contacto con soporte',
        });
    }
}    

// Modificar administracion
export const updateAdministracion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const administracion = await Administracion.findByPk(id);

        if (administracion) {
            await administracion.update(body);
            res.json({
                msg: `El administracion se ha actualizado`
            })
        } else {
            res.status(404).json({
                msg: `No existe un administracion con el id ${id}`
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

