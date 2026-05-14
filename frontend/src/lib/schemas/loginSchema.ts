import { z }from 'zod'
export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(6, {
        message: 'Password must be at least 6 character with alph-numeric character'
    })

})

export type LoginSchema = z.infer<typeof loginSchema>;