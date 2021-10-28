import { Request, Response } from 'express';
import Hobby  from '../models/Hobby';
import User  from '../models/User';

const getAllHobbies = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        const hobbies = await Hobby.find({user: id});
        return res.status(200).json({ hobbies });
    } catch (error) {
        return res.send("unable to get hobbies");
    }
}

const deleteHobby = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const user_id: string = req.params.user_id
        const user = await User.findOne({_id: user_id})
        user.hobbies.filter(i => i._id == user_id)

        await user.save()

        const deleted = await Hobby.findByIdAndDelete(id);
            return res.status(204).send("Hobby deleted");
    } catch (error) {
        return res.send(error)
    }
};


const createHobby = async (req: Request, res: Response) => {
    const id: string = req.params.user_id;
    
    const body: {
        passionLevel: string,
        name: string,
        year: number
        user: string
    } = req.body ?? null;
    try {
        const user = await User.findOne({_id: body.user})
        const createdHobby = await Hobby.create(body);

        user.hobbies.push(createdHobby._id)
        await user.save()

        return res.status(201).json({
            createdHobby,
        });
    } catch (error) {
        return res.send(error)
    }
}


export {
    createHobby,
    getAllHobbies,
    deleteHobby
}






