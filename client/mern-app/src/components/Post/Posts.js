import  {useSelector} from 'react-redux';


const Posts =()=>{
    const posts = useSelector((state) => state.posts);
    console.log(posts)
    return (
        <h1>POSTS</h1>
        );
}

export default Posts; 