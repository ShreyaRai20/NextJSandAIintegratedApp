import {z} from 'zod'

export const messageSchema = z.object({
    content: z.string()
    .min(2,'Username must be atleast 2 characters')
    .max(300,'Username must not be more than 300 characters')
})