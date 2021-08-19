import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {requestautoSearch} from '../userThunk';

const AutoSearch=()=>{
    const record=useSelector((state)=>state.userData.autoSearch);
    console.log(record)
    const dispatch=useDispatch()
    const [match,setMatch]=useState("");
    const [select,setSelect]=useState("")


    useEffect(()=>{
        dispatch(requestautoSearch())
    },[dispatch]);

    const handleChange=(search)=>{
        if(!search){
            setMatch([])
        }
        else{
       let matches=record.filter(data=>{
                const regularex=new RegExp(`${search}`,"gi");
                return data.name.match(regularex)
            })  
            setMatch(matches)
        }
        }

        const x = match && match.length ? match.map((item, index) => 
        <h1 key={index}>{item.name}</h1>
        ) : <p>Record not found</p>
    return(
        <div>
            <center>
            <form>
            <label for="Search">Search:</label><br/>
            <input type="text" id="search" name="search"  onChange={e=>handleChange(e.target.value)}/><br />
            </form>
            
            {x}
            </center>
        </div>
    )
}
export default AutoSearch;

