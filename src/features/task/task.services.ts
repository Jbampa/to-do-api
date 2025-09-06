import type { Prisma } from "@prisma/client";
import { prisma } from "../../libs/prisma.js";



export const createTask = async (data: Prisma.TaskCreateInput) => {
    const task = await prisma.task.create({
        data
    })

    return task;
}

