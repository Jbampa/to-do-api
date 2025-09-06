import type { RequestHandler } from "express";
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "./task.services.js";
import { Prisma } from "@prisma/client";

export const createTaskController: RequestHandler = async (req, res) => {
    try {
        const result = await createTask(req.body as Prisma.TaskCreateInput);

        res.status(201).json({
            success: result
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
            error: "Internal server error"
        })
    }
}

export const deleteTaskController: RequestHandler = async (req, res) => {
    try {
        const deleteTaskResult = await deleteTask(Number(req.params.id));

        res.status(200).json({
            success: `Task with id "${req.params.id}" deleted`,
            deleteTaskResult
        })

    } catch (err) {
        res.status(500).json({
            error: "Internal server error"
        })
    }
}

export const updateTaskController: RequestHandler = async (req, res) => {
    try {
        const updateResult = await updateTask(Number(req.params.id));

        res.status(200).json({
            success: `Task status with id "${req.params.id}" updated`,
            updateResult
        })
    } catch (err) {
        res.status(500).json({
            error: "Internal server error"
        })
    }
}

export const getAllTasksController: RequestHandler = async (req, res) => {
    try {
        const tasks = await getAllTasks();

        res.status(200).json({
            tasks
        })
    } catch(err) {

        res.status(500).json({
            error: "An unexpected error occurred"
        })
    }
}

export const getTaskByIdController: RequestHandler = async (req, res) => {
    try {
 const task = await getTaskById(Number(req.params.id));

        res.status(200).json({
            task
        })
    } catch (err) {
        res.status(500).json({
            error: "An unexpected error occurred"
        })
    }
}