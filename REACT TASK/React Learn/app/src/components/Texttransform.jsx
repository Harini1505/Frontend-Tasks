import React,{useState} from "react";
function Texttransform(){
    const[Text,setText]=useState("");
    const reverse=()=>{setText(Text.split("").reverse("").join(""))}
    return(
        
        <div>
            <br/>
            <hr/>
        <input type="text" value={Text} onChange={e=>setText(e.target.value)} placeholder="Enter your text"/>
        <button onClick={reverse}> Reverse</button>
        </div>
    );
}
export default Texttransform