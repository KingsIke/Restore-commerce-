import {z} from "zod"

const passwordValidation = new RegExp(
    /(?=^.{6,10}$)(?=.*[a-z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/
)
export const registerSchema = z.object({
 email: z.email(),
 password: z.string().regex(passwordValidation, {
    message: 'Password must contain 1 lower charater, 1 uppercase, 1 number, 1 secial and 6-10 character '
 }) 

})

export type RegisterSchema = z.infer<typeof registerSchema> 