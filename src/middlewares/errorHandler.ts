import type { ErrorRequestHandler, RequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(500).json({
        error: "An unexpected internal server error occurred"
    })
}

export const notFoundRequest: RequestHandler = (req, res) => {
    res.status(404).json({
        error: "Route not found"
    })
}