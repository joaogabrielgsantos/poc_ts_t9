import { Request, Response, Router } from "express";
import userControllers from "../controllers/userControllers.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import userSchema from "../schemas/userSchemas.js";


const userRoutes = Router()


userRoutes
    .get("/status", (req: Request, res: Response) => res.send("OK!"))
    .post("/sign-up", validateSchema(userSchema), userControllers.signup )
    .get("/", userControllers.listAll)



export default userRoutes