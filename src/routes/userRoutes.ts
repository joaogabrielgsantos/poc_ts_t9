import { Request, Response, Router } from "express";


const userRoutes = Router()


userRoutes
    .get("/status", (req: Request, res: Response) => res.send("OK!"))



export default userRoutes