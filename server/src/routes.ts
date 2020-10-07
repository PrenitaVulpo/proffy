import express, { request, response } from 'express';
import ClassesControler from './controllers/classesController';
import ConnectionsControler from './controllers/connectionsControllers';
const classesControler = new ClassesControler();
const connectionsControler = new ConnectionsControler();
const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({message: 'kkjj'})
})

routes.post('/classes', classesControler.create);
routes.get('/classes', classesControler.index);

routes.post('/connections', connectionsControler.create)
routes.get('/connections', connectionsControler.index)

export default routes;