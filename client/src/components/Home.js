import React from 'react'
import { useHistory } from "react-router-dom";
const Welcome=()=>{
    let history=useHistory();
    return(
        <div>
            <center>
           {/*<button onClick={() => window.location.href = '/userform'}>User form</button>*/}
           <h1><em>Hello Welcome to Home Page of Application</em></h1>
           <h1><em>You Can Add New User or See Details of Existing User</em></h1>
           <button onClick={() =>{history.push("/getusers");}}>ShowUsers</button><br /><br />
           <button onClick={() =>{history.push("/addData");}}>AddUser</button><br /><br />
           
           </center>
        </div>
    )
}
export default Welcome;

