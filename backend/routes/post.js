import express from 'express';

import {getPosts,
        createPosts,
        updatePost,
        deletePost,
        createuserPost,
        getUserPost,
        createuserComment,
        getUserComment,

    } 
    from '../controllers/posts.js'

const router = express.Router();
// 
router.get('/getusers', getPosts);
router.post('/posts', createPosts);
router.post('/userpost', createuserPost);
router.post('/usercomment', createuserComment);
router.patch("/edit/:id", updatePost);
router.delete("/users/:id",deletePost);
router.get('/getuserspost',  getUserPost);
router.get('/getuserscomment', getUserComment);


export default router;
