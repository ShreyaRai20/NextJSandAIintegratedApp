
import {z} from 'zod'

export const usernameValidation = z
.string()
.min(2,'Username must be atleast 2 characters')
.max(20,'Username must not be more than 20 characters')
.regex(/^[a-zA-Z0-9_]+$/,'Username must not be more than 20 characters')


export const signupSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'invalid email address'}),
    password: z.string().min(6,{message:'must be atleast 6 character'}),
})