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
