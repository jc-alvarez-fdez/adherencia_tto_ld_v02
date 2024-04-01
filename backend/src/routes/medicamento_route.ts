import { Router } from "express";
import { addMedicamento, deleteMedicamento, getMedicamento, getMedicamentos, updateMedicamento } from "../controllers/medicamento_controller";

const routerMedicamentos = Router();

routerMedicamentos.get('/', getMedicamentos); //devuelve todos los medicamentos
routerMedicamentos.get('/:id', getMedicamento); //devuelve medicamento por id
routerMedicamentos.delete('/:id', deleteMedicamento); // elimina medicamento por id
routerMedicamentos.post('/', addMedicamento); // añade medicamento
routerMedicamentos.put('/:id', updateMedicamento); // actualiza medicamento


export default routerMedicamentos;