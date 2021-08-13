import express from 'express';

import {getPosts,createPosts,updatePost,deletePost} from '../controllers/posts.js'

const router = express.Router();
// 
router.get('/getusers', getPosts);
router.post('/posts', createPosts);
router.patch("/edit/:id", updatePost);
router.delete("/users/:id",deletePost);





export default router;
