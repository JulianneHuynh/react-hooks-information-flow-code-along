import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

// Parent is the component : color is the state variable 
function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF")

function handleChangeColor(newChildColor){
  const newRandomColor = getRandomColor();
  setColor(newRandomColor); 
  setChildrenColor(newChildColor);
}

//handleChangeColor() is passed as a state changing function as a ----PROP---- to both Child component. This allows the handleChangeColor() to run when Child component is CLICKED 
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
