import express, { Application, Request, Response } from 'express';
import cookieParser from "cookie-parser";
import cors from 'cors'
import routerPacientes from '../routes/paciente_route';
import routerMedicamentos from '../routes/medicamento_route';
import routerAdministraciones from '../routes/administracion_route';
import db from '../db/connection';


class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "3001";
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicación corriendo en el puerto ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API working'
            })
            this.app.use('/api/pacientes', routerPacientes);
            this.app.use('/api/medicamentos', routerMedicamentos);
            this.app.use('/api/administraciones', routerAdministraciones);

        })
    }

    midlewares() {
        //Parseamos el body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());

        //header and populate req.cookies with an object keyed by the cookie names
        this.app.use(cookieParser());

        // Middleware para analizar el cuerpo de las solicitudes con datos de formulario
        this.app.use(express.urlencoded({ extended: true })); // Para analizar datos de formularios en el cuerpo de la solicitud        
    }

    async dbConnect() {

        try {
            await db.authenticate();
            console.log('Base de datos conectada');

        } catch (error) {
            console.log(error);
            console.log('Error al conectarse a la base de datos')
        }      
    }



}


export default Server;