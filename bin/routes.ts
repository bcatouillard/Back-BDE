import { Application } from 'express';
import eventRoute from '../api/event/routes';
import userRoute from '../api/user/routes';

const register = ( app: Application) => {
    eventRoute(app);
    userRoute(app);
}

export default register;