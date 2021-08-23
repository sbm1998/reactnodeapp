import {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {requestgetTask,requestFilterTask} from '../userThunk'


export default function GetTask(){
    const records=useSelector((state)=>state.userData.tasks);
    console.log(records);
    const [error,setError]=useState(" ")
    const [state,setState]=useState({
        sdate:"",
        edate:"",
    })
    let dispatch=useDispatch();
  //  let history=useHistory();

    const {sdate,edate}=state;
    const handleAddData=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!sdate || !edate){
            setError("Fill All the Value First");
        }
        else{
            console.log(state.sdate,state.edate)
            dispatch(requestFilterTask(state));
            setError("");
    }
}
    useEffect(()=>{
        dispatch(requestgetTask(records));
},[dispatch]);


const recordsFields= records.length > 0 ? Object.keys(records[0]) : [];
console.log(recordsFields)
return (

    <div>
        <h1>Users Tasks</h1>
        <center>
            <h2>Filter User Task</h2>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
            <label for="sdate">Start Date:</label><br/>
            <input type="date" id="sdate" name="sdate" value={sdate} onChange={handleAddData}/><br />
            <label for="edate">End Date:</label><br />
            <input type="date" id="edate" name="edate" value={edate} onChange={handleAddData}/><br />
            <input type="submit" value="Submit"/>
            </form>
            </center>
        
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

