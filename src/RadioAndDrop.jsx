import { useState } from "react";

function RadioAndDrop() {
  const [gender, setGender] = useState("Female");
  const [city, setCity] = useState('surat');
  return (
    <div>
      <h3>Radio Button and Drop Down Handling</h3>
      <h4>Select Gender: {gender}</h4>
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="male"
        value={"Male"}
      />
      &nbsp; &nbsp;
      <label htmlFor="female">Female</label>
      <input
        type="radio"
        checked={gender == "Female"}
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="female"
        value={"Female"}
      />
      <br />
      <br />

      <h4>Select City: {city}</h4>
      <select onChange = {(event) => setCity(event.target.value)} name="city" id="city">
        <option value="surat">Surat</option>
        <option value="vadodara">Vadodara</option>
        <option value="ahmedabad">Ahmedabad</option>
        <option value="bhavnagar">Bhavnagar</option>
        <option value="amreli">Amreli</option>
      </select>
    </div>
  );
}

export default RadioAndDrop;
