import postData from '../models/postData.js'
import postUserData from '../models/postUserData.js'
import commentData from '../models/commentData.js'

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
    const { title,body } = req.body;

    const newPostMessage = new postUserData({ title,body })

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
        const { name,body } = req.body;
    
        const newPostMessage = new commentData({ name,body })
    
        try {
            await newPostMessage.save();
    
            res.status(201).json(newPostMessage );
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    }

export const getUserComment= async(req,res)=>{
        //
        try{
            const  postInformation= await commentData.find({});
            res.status(200).json(postInformation)
            }
            catch(error){
            res.status(404).json({message:error.message})
            }
        }
