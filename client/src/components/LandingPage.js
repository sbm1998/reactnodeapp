import React from 'react'
import { useHistory } from "react-router-dom";
const Welcome=()=>{
    let history=useHistory();
    return(
        <div>
           {/*<button onClick={() => window.location.href = '/userform'}>User form</button>*/}
           <button onClick={() =>{history.push("/login");}}>Login</button>
           <button onClick={() =>{history.push("/signup");}}>signUp</button>

        </div>
    )
}
export default Welcome;
