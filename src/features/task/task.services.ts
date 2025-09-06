import type { Prisma } from "@prisma/client";
import { prisma } from "../../libs/prisma.js";



export const createTask = async (data: Prisma.TaskCreateInput) => {
    const result = await prisma.task.create({
        data
    })

    return result;
}

export const deleteTask = async (idNumber: number) => {
    const result = await prisma.task.delete({
        where: {
            id: idNumber
        }
    })

    return result;
}

export const updateTask = async (idNumber: number) => {
    const task = await prisma.task.findUnique({
        where: {
            id: idNumber
        }
    })

    if(task) {
        const newStatus = !task.status; 
        console.log(newStatus);

        const result = prisma.task.update({
            where: {
                id: idNumber
            },
            data: {
                status: newStatus
            }
        })

        return result;
    }

    return task;
}

export const getAllTasks = async () => {
    const tasks = await prisma.task.findMany();
    
    return tasks;
}

export const getTaskById = async (idNumber: number) => {

    const result = await prisma.task.findUnique({
        where:  {
            id: idNumber
        }
    })
    
    return result;
}