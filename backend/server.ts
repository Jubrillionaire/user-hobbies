import express, { Express } from 'express';
import userController from './routes/users'
import hobbiesController from './routes/hobbies'
import mongoose from "mongoose";
import cors from 'cors'

const app: Express = express();

app.use(express.json())


app.use(cors())

mongoose.connect("mongodb://localhost/user-hobbies")
.then(() => console.log("mongodb connected!!!!"))
.catch((err) => console.log(err));



const PORT = process.env.PORT || 5000;

app.use('/api/users', userController);
app.use("/api/hobbies", hobbiesController)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))