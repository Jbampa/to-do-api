import express from 'express';
import helmet from 'helmet';
import mainRoutes from './features/task/task.routes.js';

const server = express();
const port = process.env.PORT;

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use('/', mainRoutes);

server.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
})

