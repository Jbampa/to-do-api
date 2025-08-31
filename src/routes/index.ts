import express from 'express';

const mainRoutes = express.Router();

mainRoutes.get('/', (req, res) => {
    res.json({
        status: "Working."
    })
})

export default mainRoutes;