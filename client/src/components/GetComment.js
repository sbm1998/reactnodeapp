import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {requestgetComment} from '../userThunk'
import { useHistory } from 'react-router-dom';


export default function GetComment(){
    const dispatch=useDispatch();
    const records=useSelector((state)=>state.userData.comment);
   // const userId=useSelector((state)=>state.userData._id);

    let history=useHistory();

    useEffect(()=>{
        dispatch(requestgetComment(records));
},[dispatch]);

console.log(records);

const recordsFields= records.length > 0 ? Object.keys(records[0]) : [];
console.log(recordsFields)
return (
    
    <div>
        <h1>Users Comments</h1>
        
       
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
            </tr>)
        )}
        </tbody>
        </table>
        </div>
)
}