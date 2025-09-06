import type { RequestHandler } from "express";
import { createTask } from "./task.services.js";
import { Prisma } from "@prisma/client";

export const createTaskController: RequestHandler = async (req, res) => {
    try {
        const result = await createTask(req.body as Prisma.TaskCreateInput);

        res.status(201).json({
            data: result
        })

    } catch (err) {
        
        if(err instanceof Prisma.PrismaClientKnownRequestError) {
            if(err.code == 'P2002') {
                return res.status(409).json({
                    error: "A task with this title already exists"
                })
            }
        }

        res.status(500).json({
            error: err
        })
    }
}

