import { Request, Response} from 'express';
import Event from './model';

const EventController = {

    /**
     * Insert in Database
     * @param req Request from Frontend
     * @param res Response with success and data
     */
    async insert(req: Request, res: Response){
        const event = req.body;
        try {
            const document = await Event.create(event);
            res.header("Access-Control-Allow-Origin", "*").status(200).send({success: true, insertedDocument: document});
        } catch (error) {
            res.status(400).send({ success: false, error });
        }
    },

    /**
     * Get All Data in Database
     * @param req Request from Frontend
     * @param res Response with success and data
     */
    async getAll(req: Request, res: Response) {
        try {
            const allEvents = await Event.find();
            res.status(200).send({ success: true, data: allEvents });
        } catch (error) {
            res.status(400).send({ success: false, error });
        }
    },
}

export default EventController;