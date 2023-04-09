import joi from 'joi';


const userSchema = joi.object({
    name:
        joi
            .string()
            .min(2)
            .required(),
    email:
        joi
            .string()
            .regex(/\S+@\S+\.\S+/)
            .required(),
    password:
        joi
            .string()
            .min(5)
            .max(9)
            .required(),
    
});


export default userSchema