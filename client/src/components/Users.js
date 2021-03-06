import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { requestgetusers,requestdeleteuser} from '../userThunk'
import { setUser,getPostId } from '../actions/allActions';
import { useHistory } from 'react-router-dom';


export default function Users(){
    const dispatch=useDispatch();
    const records=useSelector((state)=>state.userData.users);
    const userId=useSelector((state)=>state.userData._id);
    let history=useHistory();

    useEffect(()=>{
        dispatch(requestgetusers(records));
},[dispatch]);

console.log(records);

const recordsFields= records.length > 0 ? Object.keys(records[0]) : [];
console.log(recordsFields)
return (
    
    <div>
        <h1>Hello Users</h1>
        
       
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
         <input type="button" value="deleteData" onClick={() => dispatch(requestdeleteuser(record._id))}/>
        <input type="button" value='Update' onClick={()=>{dispatch(setUser(record)) 
            history.push("/updatedata")} } />
        {/* <input type="button" value='ShowPosts' onClick={()=>history.push("/getuserspost")}/> */}
        <input type="button" Value="ShowPost" onClick={()=>{ dispatch(getPostId(userId))
            history.push('/getuserspost');
            }}/>
            </tr>)
        )}
        </tbody>
        </table>
        </div>
)
}