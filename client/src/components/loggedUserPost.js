import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {requestgetLoginUserPost} from '../userThunk'
import { useHistory } from 'react-router-dom';
import { setuserPost } from '../actions/allActions';


export default function GetPost(){
    const dispatch=useDispatch();
    const records=useSelector((state)=>state.userData.posts);
    const postId=useSelector((state)=>state.userData.id);
    const id=useSelector((state)=>state.userData.id);
    let history=useHistory();

    useEffect(()=>{
        dispatch(requestgetLoginUserPost(postId));
},[dispatch]);

console.log(records);

const recordsFields= records.length > 0 ? Object.keys(records[0]) : [];
console.log(recordsFields)
return (
    
    <div>
        <h1>Login User Posts</h1>
        
       
        <table>
            <tbody>
            <tr>
            {recordsFields.map((header)=>(
                <th key={header}>
                    {header}
                    </th>
            ))}
            </tr>
        {records.map((record)=>
            (<tr key={record.id}>

            {recordsFields.map((field)=>(

                <td key={`${record.id}-${field}`}>

                   {typeof record[field]==="object" ? JSON.stringify(record[field]) : record[field] }
                </td>
            ))} 
                <input type="button" Value="ShowComment" onClick={()=>{ dispatch(setuserPost(record))
            history.push('/getcomment')}}/>
            {id===record.id ? <input type="button" value="Add Comment" onClick={()=>{ dispatch(setuserPost(record))
            history.push('/addComment')}}/>:""}
            </tr>)
        )}
        </tbody>
        </table>
        </div>
)
}