import postData from '../models/postData.js'
import postUserData from '../models/postUserData.js'
import commentData from '../models/commentData.js'
import taskData from '../models/taskData.js'
export const getPosts= async(req,res)=>{
//
    try{
        const  postInformation= await postData.find({});
        res.status(200).json(postInformation)
    }catch(error){
        res.status(404).json({message:error.message})
    }
}
//

export const createPosts = async (req, res) => {
    const { name,email,city } = req.body;

    const newPostMessage = new postData({ name,email,city })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
//
export const updatePost =async (req,res)=>{
    const {id} =req.params;
    const {name,email,city}=req.body
    const updateData={name,email,city,_id:id}
    console.log("update",name,email,city,id)
    try {
        const updatedData=await postData.findByIdAndUpdate(id,updateData)
        res.status(200).json(updatedData)
        
    } catch (error) {
        console.log(error)
        res.status(404).json({message:error.message})
        
    }
}  


export const deletePost =async (req,res)=>{
    const id=req.params.id
    console.log(id)
    try {
        const allData= await postData.findByIdAndDelete(id)
        console.log("allDATA",allData)
        res.status(200).json(allData)
    } catch (error) {
        res.status(404).json({message:error.message})
        }

}

export const createuserPost = async (req, res) => {
    const {title,body,id } = req.body;

    const newPostMessage = new postUserData({ title,body,id })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getUserPost= async(req,res)=>{
    //
        try{
            const  postInformation= await postUserData.find({});
            res.status(200).json(postInformation)
        }catch(error){
            res.status(404).json({message:error.message})
        }
    }

    export const createuserComment = async (req, res) => {
        const { name,body,id } = req.body;
    
        const newPostMessage = new commentData({ name,body,id })
    
        try {
            await newPostMessage.save();
    
            res.status(201).json(newPostMessage );
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    }

export const getUserComment= async(req,res)=>{
        //
        const id=req.params.id;
        try{
            const  postInformation= await commentData.find({id:id});
            res.status(200).json(postInformation)
            }
            catch(error){
            res.status(404).json({message:error.message})
            }
        }

export const loginUserPost=async(req,res)=>{
    try{
        const id=req.params.id
        const  postInformation= await postUserData.find({id:id});
        res.status(200).json(postInformation)
    }
    catch(error){
        console.log(error)
        res.status(404).json({message:error.message})
    }
}

export const loginUsercomment=async(req,res)=>{
    try{
        const id=req.params.id
        const  postInformation= await commentData.find({postId:id});
        res.status(200).json(postInformation)
    }
    catch(error){
        console.log(error)
        res.status(404).json({message:error.message})
    }
}

export const autoSearch=async(req,res)=>{
    try{
        const  postInformation= await postData.find({});
        res.status(200).json(postInformation)
    }
    catch(error){
        console.log(error)
        res.status(404).json({message:error.message})
    }
}

export const createuserTask = async (req, res) => {
    const {title,date,stime,etime,user } = req.body;

    const newUserTask = new taskData({ title,date,stime,etime,user })

    try {
        await newUserTask.save();

        res.status(201).json(newUserTask );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getUserTask= async(req,res)=>{
    //
        try{
            const  postInformation= await taskData.find({});
            res.status(200).json(postInformation)
        }catch(error){
            res.status(404).json({message:error.message})
        }
    }

export const filterUserTask = async (req, res) => {
        try {
            const {sdate,edate } = req.query;
            const filterdata= await taskData.find({date:{$gte:(sdate.toString()),$lte:(edate.toString())}})
            res.status(200).json(filterdata)
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    }


