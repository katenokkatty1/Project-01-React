import {useEffect, useState } from "react";
import style from "./SpaceMissionForm.module.css";
import { planetOptions } from "./selectOptions";

export default function SpaceMissionForm() {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("mars");
  const [message, setMessage] = useState("");
     
// useEffect без массива зависимостей
  // при mount и при любых изменениях - update
  useEffect(() => {
    console.log("Use effect in Space Mission - no dependencies");
  });

  // useEffect с зависимостями
  // при mount 
  // или когда меняется указанная в массиве переменная - name
  useEffect(() => {
    console.log("Use effect in Space Mission - with dependecie on name");
  }, [name]);


  function handleSpaceMissionForm() {
     if (name && planet) {
       setMessage(`🧑‍🚀 Astronaut ${name} is headed to ${planet}!`);
    } else {
       setMessage("Please enter your name to begin your mission.");  
    }
    
  }

  return (
    <div className={style.container}>
      <h2>Space Mission</h2>

        <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
       <select
        name="planet"
        value={planet}
        onChange={(e) => setPlanet(e.target.value)}
      >
        {/* <option value="Mars">Mars</option>
        <option value="Venus">Venus</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option> */}
        {planetOptions.map((option) => (<option value={option.value}>{option.label}</option>))}
        </select>

      <button type="button" onClick={handleSpaceMissionForm}>
        Melden
      </button>
      
      {message && <p>{message}</p>}
      
    </div> 

  );
}