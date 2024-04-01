import express, { Application, Request, Response } from 'express';
import Medicamento from '../models/medicamento_model';



// Muestra todos los medicamentos
export const getMedicamentos = async (req: Request, res: Response) => {
    const listMedicamentos = await Medicamento.findAll();
    res.json(listMedicamentos);
}

// Muestra medicamento por id
export const getMedicamento = async (req: Request, res: Response) => {
    const { id } = req.params;
    const medicamento = await Medicamento.findByPk(id);

    if (medicamento) {
        res.json(medicamento);
    } else {
        res.status(404).json({
            msg: `No existe un medicamento con el id ${id}`
        })
    };
}


// Elimina medicamento por id
export const deleteMedicamento = async (req: Request, res: Response) => {
    const { id } = req.params;
    const medicamento = await Medicamento.findByPk(id);
    if (!medicamento) {
        res.status(404).json({
            msg: `No existe un medicamento con el id ${id}`
        })
    } else {
        await medicamento.destroy();
        res.json({
            msg: `El medicamento se ha eliminado`
        })

    }
}



// Añadir medicamento
export const addMedicamento = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Medicamento.create(body);

        res.json({
            msg: 'El medicamento se ha añadido',
            body
        });

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error, póngase en contacto con soporte',
        });
    }
}    

// Modificar medicamento
export const updateMedicamento = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const medicamento = await Medicamento.findByPk(id);

        if (medicamento) {
            await medicamento.update(body);
            res.json({
                msg: `El medicamento se ha actualizado`
            })
        } else {
            res.status(404).json({
                msg: `No existe un medicamento con el id ${id}`
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

