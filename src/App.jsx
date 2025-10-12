import Header, { Profile } from "./Header"

function App(){
  const userName = "Pushpendra"
  let x = 10
  let y = 20
  return <div>
    {/* <Header/>
    <Profile /> */}
    <h1>{userName}</h1>
    <h4>Sum of 10 + 20 is {x+y}</h4>
    <button onClick={()=> alert("Hello")}>Click Me</button>

  </div>
}

export default App
