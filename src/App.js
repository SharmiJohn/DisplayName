
import { useState } from "react";

function App() {
  const [name,setname]=useState("");
  const [last,setlast]=useState("");
  const [fullname,setfullname]=useState("")
  const handlesubmit=(e)=>{
  e.preventDefault();
   setfullname(`${name} ${last} `);
   console.log(fullname.length);
  }
  return (
    <div>
      <form onSubmit={(e)=>{handlesubmit(e)}}>
        <label>First Name</label>
        <input value={name} onChange={(e)=>{setname(e.target.value)}} required/>
        <br/>
        <label>Last Name</label>
        <input value={last} onChange={(e=>{setlast(e.target.value)})} required/>
        <br/>
        <button>Submit</button>
      </form>
      {fullname.length!==0&& <p>Full Name:{fullname}</p>}

      
    
    </div>
  );
}

export default App;
