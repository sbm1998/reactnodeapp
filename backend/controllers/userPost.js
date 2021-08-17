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

