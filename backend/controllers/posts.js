import postData from '../models/postData.js'

export const getPosts= async(req,res)=>{
//
    try{
        const  postInformation= await postData.find();
        console.log(postInformation)
        res.status(200).json(postInformation)
    }catch(error){
        res.status(404).json({message:error.message})
    }
}
//

export const createPosts = async (req, res) => {
    const { name,email,city } = req.body;

    const newPostMessage = new PostMessage({ name,email,city })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
//
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { name,email,city } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}
