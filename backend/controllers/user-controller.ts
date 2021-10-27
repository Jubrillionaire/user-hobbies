import User from "../models/User";
import { Request, Response } from 'express';

const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find({});
        return res.send({ users });
    } catch (error) {
        return res.send("unable to get users");
    }
}


const addUser = async (req: Request, res: Response) => {

    const body: {
        name: string,
    } = req.body ?? null;

    try {
        const user = await User.create(body);
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.send(error)
    }
}


export {getUsers, addUser}
