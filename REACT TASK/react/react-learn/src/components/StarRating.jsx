/* import { useState } from "react"

function StarRating()
{
    const[star,setstar]=useState("");
    return (
    <div>
      <h2>Star Rating</h2>

      <input type="number" onChange={(e) => setstar(Number(e.target.value))} placeholder="Enter a number"/>
      <p> {"\u2605".repeat(star)}
      </p>
    </div>
  );
}

export default StarRating;
 */

import React, { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);       
  const [hover, setHover] = useState(0);     

  return (
    <div>
      <h2>Clickable Star Rating</h2>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            fontSize: "40px",
            color: (hover || rating) >= star ? "gold" : "lightgray",
            cursor: "pointer",
          }}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
