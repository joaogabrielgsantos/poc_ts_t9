import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { User } from "../protocols/User.js";
import userServices from "../services/userServices.js";

async function signup(req: Request, res: Response) {
    const newUser = req.body as User;

    try {
        await userServices.signup(newUser)
        return res.sendStatus(StatusCodes.CREATED)

    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
    }

}

async function listAll(req: Request, res: Response) {
    try {
        const resultado = await userServices.listAll()
        return res.send(resultado.rows)
       


    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
    }


}




export default {
    signup,
    listAll
}