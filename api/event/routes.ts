import { Application, Request, Response} from 'express';
import EventController from './controller';

const eventRoute = (app: Application) => {

    app.post("/event/new", (req: Request, res: Response) => {
        EventController.insert(req, res);
    });

    app.get("/event/get", (req: Request, res: Response) => {
        EventController.getAll(req, res);
    });
};

export default eventRoute;