import type { RequestHandler } from "express";
import type { ZodType } from "zod";


export const validateBody = (zod: ZodType): RequestHandler => async (req, res, next) => {
    try {
        const result = zod.parse(req.body);
        return next();
    } catch (err) { 
        return res.status(500).json({
            error: err
        })
    }
}