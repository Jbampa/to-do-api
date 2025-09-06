import express from 'express';
import { validateBody } from './task.validate.js';
import { taskSchema } from './task.zod.schema.js';
import { createTaskController, deleteTaskController, getAllTasksController, getTaskByIdController, updateTaskController } from './task.controller.js';
import { getTaskById } from './task.services.js';


const mainRoutes = express.Router();

mainRoutes.get('/', (req, res) => {
    res.json({
        status: "Working."
    })
})

mainRoutes.post('/task', validateBody(taskSchema), createTaskController)
mainRoutes.delete('/taskDelete/:id', deleteTaskController);
mainRoutes.patch('/task/:id', updateTaskController);
mainRoutes.get('/task', getAllTasksController)
mainRoutes.get('/task/:id', getTaskByIdController)

export default mainRoutes;