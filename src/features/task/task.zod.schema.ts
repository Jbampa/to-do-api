import z from 'zod';

export const taskSchema = z.object({
    title: z.string().min(3).nonoptional(),
    description: z.string().optional()
})