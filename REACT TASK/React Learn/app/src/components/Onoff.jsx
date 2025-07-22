import React,{useState} from "react";

function Onoff() {
    const[on, setOn]=useState(true);
  return (<>
  <br/>
  <hr/>
  <div style={{backgroundColor: on?"red":"green", width:"50px", height:"50px"}}></div><br/>
  <button onClick={()=>setOn(false)}>Button</button>
  </>
        
  );
}
export default Onoff;
