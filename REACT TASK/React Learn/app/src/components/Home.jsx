import React,{useState} from "react";
function Home(){
    const[count,setcount]=useState(0);
    return(
        <div>
            <h>count: {count}</h><br/>
            <button onClick={()=>setcount(count+1)}>click Me</button>
        </div>

    )
}
export default Home;