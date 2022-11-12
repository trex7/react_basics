import "./newComponent.css";
import { useState } from "react";

const NewComponent = (props) => {
    // const [name, setName] = useState("John Doe");
    const [name, setName] = useState("John Doe");
    return (
      <>
        <h3>Component: {props.name}</h3>
  
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
        ></input>
        <h4>Your name: {name}</h4>
      </>
    );
  };

export default NewComponent;