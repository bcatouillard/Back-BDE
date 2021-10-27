import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
    title: String,
    address: String,
    eventDate: Date
});

const Event = model('Event', eventSchema);

export default Event;