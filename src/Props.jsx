import { useState } from "react"
import Wrapper from "./Wrapper"


const Props = ({ user }) => {

  const [userName, setuserName] = useState("")
  const [age, setAge] = useState()
  const [university, setUniversity] = useState("")

  const userNameValue = () => {
  return (
    <div>
      <label htmlFor="userName">Username: </label>
      <input type="text" onChange={(event) => setuserName(event.target.value)} placeholder="Enter Username" value={userName}/>
      <h1>{userName}</h1>
    </div>
  )
}

const ageValue = () => {
  return (
    <div>
      <label htmlFor="age">age: </label>
      <input type="number" onChange={(event) => setAge(event.target.value)} placeholder="Enter Age" value={age}/>
      <h1>{age}</h1>
    </div>
  )
}

const universityValue = () => {
  return (
    <div>
      <label htmlFor="university">University Name: </label>
      <input type="text" onChange={(event) => setUniversity(event.target.value)} placeholder="Enter University Name" value={university}/>
      <h1>{university}</h1>
    </div>
  )
}


  return (
    <div>
    <div>
      {userNameValue()}
      {ageValue()}
      {universityValue()}
    <button onClick={()=>setuserName("") & setUniversity("") & setAge("")}>Clear the text</button>

    </div>



      <div style={{visibility: "hidden"}}>
      <Wrapper>
        <h1>Hello Everyone</h1>
      </Wrapper>

      <Wrapper>
        <h1>Hello Guys! Good afternoon</h1>
      </Wrapper>

      <Wrapper color= "orange">
        <h1 >Hello Guys! Good afternoon</h1>
        <h1 >Hello Guys! Good afternoon</h1>
      </Wrapper>
      </div>

      {user.map((person, index) => (
        <div key={index} style={{visibility:"hidden"}}>
          <h2>Username: {person.name}</h2>
          <h2>Age: {person.age}</h2>
          <h2>Email: {person.email}</h2>
          {person.student ? <h2>{person.student()}</h2> : ""}
          <br />
        </div>
      ))}
    </div>
  )
}


export default Props
