import { Router } from "express";
import { addAdministracion, deleteAdministracion, getAdministracion, getAdministraciones, updateAdministracion } from "../controllers/administracion_controller";

const routerAdministraciones = Router();

routerAdministraciones.get('/', getAdministraciones); //devuelve todas las administraciones
routerAdministraciones.get('/:id', getAdministracion); //devuelve administracion por id
routerAdministraciones.delete('/:id', deleteAdministracion); // elimina administracion por id
routerAdministraciones.post('/', addAdministracion); // añade administracion
routerAdministraciones.put('/:id', updateAdministracion); // actualiza administracion


export default routerAdministraciones;