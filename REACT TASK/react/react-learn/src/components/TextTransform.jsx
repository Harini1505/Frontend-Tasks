import { useState } from "react";
function TextTransform()
{
    const[text, settext]=useState("");

    // uppercase
    const uppercase=()=>{
        settext(text.toUpperCase());
    };

    // lowercasse
    const lowercase=()=>{
        settext(text.toLowerCase());
    };

    //reverse
    const reverse=()=>{
        settext(text.split("").reverse("").join(""));
    };


    //capitalize
    const capitalize=()=>{
        const capital=text.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        settext(capital);
    };
    return(
        <div>
            <h2>Text Transformer</h2>
            <input type="text" value={text} onChange={e=>settext(e.target.value)}
            placeholder="Enter a text"
            />

            <div>
                <button onClick={uppercase}>Uppercase</button>
                <button onClick={lowercase}>Lowercase</button>
                <button onClick={reverse}>reverse</button>
                <button onClick={capitalize}>capitalize</button>
            </div>
        </div>
    );
}

export default TextTransform
   