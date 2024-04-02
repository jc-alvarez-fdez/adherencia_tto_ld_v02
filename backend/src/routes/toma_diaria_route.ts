import { Router } from "express";
import { addAdministracion, deleteAdministracion, getAdministracion, getTomasDiarias, updateAdministracion } from "../controllers/administracion_controller";

const routerTomasDiarias = Router();

routerTomasDiarias.get('/', getTomasDiarias); //devuelve todas las tomasdiarias
routerTomasDiarias.get('/:id', getAdministracion); //devuelve administracion por id
routerTomasDiarias.delete('/:id', deleteAdministracion); // elimina administracion por id
routerTomasDiarias.post('/', addAdministracion); // añade administracion
routerTomasDiarias.put('/:id', updateAdministracion); // actualiza administracion


export default routerTomasDiarias;