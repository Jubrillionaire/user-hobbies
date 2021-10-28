import { Router } from 'express';
import { getAllHobbies, createHobby, deleteHobby } from '../controllers/hobbies-controller';

const router = Router();

router.get("/:id", getAllHobbies);

router.post("/", createHobby)

router.delete("/:id/:user_id", deleteHobby)


export default router
