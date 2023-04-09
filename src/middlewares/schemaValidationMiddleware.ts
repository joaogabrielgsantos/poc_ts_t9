import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema } from "joi";


export function validateSchema(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            return res
                .status(StatusCodes.UNPROCESSABLE_ENTITY)
                .send(error.details.map((detail) => detail.message));
        }
    
        next()
    }
}