import express from 'express';
import { validateBody } from './task.validate.js';
import { taskSchema } from './task.zod.schema.js';
import { createTaskController } from './task.controller.js';


const mainRoutes = express.Router();

mainRoutes.get('/', (req, res) => {
    res.json({
        status: "Working."
    })
})

mainRoutes.post('/task', validateBody(taskSchema), createTaskController)

export default mainRoutes;