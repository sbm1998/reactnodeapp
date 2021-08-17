import express from 'express';
import {createuserPost} from '../controllers/userPost'

const router = express.Router();

router.post('/userpost', createuserPost);
