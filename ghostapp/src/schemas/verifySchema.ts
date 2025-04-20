import {z} from 'zod'

export const verifySchema = z.object({
    identifier: z.string().length(6,'Verification code must be atleast 6 digits')

})