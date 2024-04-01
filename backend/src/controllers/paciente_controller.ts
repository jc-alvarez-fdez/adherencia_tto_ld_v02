import express, { Application, Request, Response } from 'express';
import Paciente from '../models/paciente_model';


// Muestra todos los pacientes
export const getPacientes = async (req: Request, res: Response) => {
    const listPacientes = await Paciente.findAll();
    res.json(listPacientes);
}

// Muestra paciente por id
export const getPaciente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const paciente = await Paciente.findByPk(id);

    if (paciente) {
        res.json(paciente);
    } else {
        res.status(404).json({
            msg: `No existe un paciente con el id ${id}`
        })
    };
}


// Elimina paciente por id
export const deletePaciente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
        res.status(404).json({
            msg: `No existe un paciente con el id ${id}`
        })
    } else {
        await paciente.destroy();
        res.json({
            msg: `El paciente se ha eliminado`
        })

    }
}



// Añadir paciente
export const addPaciente = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Paciente.create(body);

        res.json({
            msg: 'El paciente se ha añadido',
            body
        });

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error, póngase en contacto con soporte',
        });
    }
}    

// Modificar paciente
export const updatePaciente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const paciente = await Paciente.findByPk(id);

        if (paciente) {
            await paciente.update(body);
            res.json({
                msg: `El paciente se ha actualizado`
            })
        } else {
            res.status(404).json({
                msg: `No existe un paciente con el id ${id}`
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

