import { Router } from "express";
import { addPaciente, deletePaciente, getPaciente, getPacientes, updatePaciente } from "../controllers/paciente_controller";

const routerPacientes = Router();

routerPacientes.get('/', getPacientes); //devuelve todos los pacientes
routerPacientes.get('/:id', getPaciente); //devuelve paciente por id
routerPacientes.delete('/:id', deletePaciente); // elimina paciente por id
routerPacientes.post('/', addPaciente); // añade paciente
routerPacientes.put('/:id', updatePaciente); // actualiza paciente


export default routerPacientes;