import express from 'express';
import {signin,signup} from '../controllers/authentication.js'

const user_router=express.Router()

user_router.post("/signin", signin);
user_router.post("/signup", signup);

export default user_router;
