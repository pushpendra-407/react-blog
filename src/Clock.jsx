const Clock = () => {
  const [clockColour, setClockClour] = useState('Green')
  return (
    <div>
      <h1>
        Canadian Time Clock
      </h1>
      <label htmlFor="color">Select Clock Color: </label>
      <select onChange = {(event) => setClockClour(event.target.value)} name="color" id="color">
        <option value="Green">Green</option>
        <option value="Orange">Orange</option>
        <option value="Red">Red</option>
        <option value="White">White</option>
      </select>
      <SetClock color={clockColour}/>
    </div>
  )
}

export const SetClock = ({color}) => {
  return (
    <div style={{
  display: "flex",
  alignItems: "center",     // Centers vertically
  justifyContent: "center", // Centers horizontally
  border: "1px solid green",
  backgroundColor: "black",
  borderRadius: "10px",
  padding: "10px",
  marginTop: "10px",
  width: "150px"
}}>
      <span style={{color: color}}><DigitalClock /></span>
    </div>
  )
}

    import React, { useState, useEffect } from "react";

    export function DigitalClock() {
      const [time, setTime] = useState(new Date().toLocaleTimeString());

      useEffect(() => {
        const timer = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000); // Update every second

        // Clean up the timer when the component unmounts
        return () => clearInterval(timer);
      }, []); // Empty dependency array ensures it runs only once on mount

      return (
        <div>
          <h2>{time}</h2>
        </div>
      );
    }


export default Clock
