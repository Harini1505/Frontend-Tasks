import { useState, useEffect } from "react";

function TrafficLight() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    let timer;

    if (light === "red") {
      timer = setTimeout(() => setLight("green"), 2000); 
    } else if (light === "green") {
      timer = setTimeout(() => setLight("yellow"), 1500); 
    } else if (light === "yellow") {
      timer = setTimeout(() => setLight("red"), 500); 
    }

    return () => clearTimeout(timer);
  }, [light]);

  const getStyle = (color) => ({
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    margin: "10px auto",
    backgroundColor: light === color ? color : "#ddd"
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div style={getStyle("red")}></div>
      <div style={getStyle("yellow")}></div>
      <div style={getStyle("green")}></div>
      <h3>Current Light: {light.toUpperCase()}</h3>
    </div>
  );
}

export default TrafficLight;