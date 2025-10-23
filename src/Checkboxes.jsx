import { useState } from "react";

function Checkboxes() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else setSkills([...skills.filter((item) => item !== event.target.value)]);
  };
  return (
    <div>
      <ul style={{ listStyle: "none", display: "inline-block" }}>
        <h3>Select your Skills</h3>
        <div>
          <input
            onChange={handleSkills}
            type="checkbox"
            name="php"
            id="php"
            value={"php"}
          />
          <label htmlFor="php">PHP</label>
        </div>

        <div>
          <input
            onChange={handleSkills}
            type="checkbox"
            name="Java"
            id="java"
            value={"java"}
          />
          <label htmlFor="java">Java</label>
        </div>

        <div>
          <input
            onChange={handleSkills}
            type="checkbox"
            name="JavaScript"
            id="javaScript"
            value={"javaScript"}
          />
          <label htmlFor="javaScript">JavaScript</label>
        </div>

        <div>
          <input
            onChange={handleSkills}
            type="checkbox"
            name="Node"
            id="node"
            value={"node"}
          />
          <label htmlFor="node">Node</label>
        </div>
      </ul>

      <h1>{skills.toString()}</h1>
    </div>
  );
}

export default Checkboxes;
