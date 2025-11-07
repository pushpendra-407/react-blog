import Header from "./Header"
import { createElement } from "react"
import User from "./user"
import Checkboxes from "./Checkboxes"
import RadioAndDrop from "./RadioAndDrop"
import Loop from "./Loop"
import Clock from "./Clock"

 function callFun(name) {
    return alert("Apple")
  }
function App(){
  // const userName = "Pushpendra"
  // let x = 10
  // let y = 20
  // return <div>
  //   {/* <Header/>
  //   <Profile /> */}
  //   <h1>{userName}</h1>
  //   <h4>Sum of 10 + 20 is {x+y}</h4>
  //   <button onClick={()=> alert("Hello")}>Click Me</button>
  // </div>

  //return createElement("div", {id:"rootDiv"}, "Hello From Div")
  // return <div id="divOther">
  //   Hello Other Div
  // </div>

  // function callFun(name){
  //   alert(name)
  //}

return <div>
    {/* <h1>Pushp's todos</h1>
    <img src="https://images.macrumors.com/t/Cqlp0BFxY71JF8RF3VnNZomvXT4=/1600x1200/smart/article-new/2023/02/google-photos-app.jpg" alt="Google Photos icon" width={"200px"} height={"auto"}/>
    <ul>
      <li>Learn React</li>
      <li>Learn Backend</li>
      <li>Get a Job and settled</li>
    </ul> */}
  {/* <User /> */}
  {/* <Header/> */}
    {/* <Checkboxes /> */}
    {/* <RadioAndDrop /> */}
    {/* <Loop/> */}
    <Clock/>
    {/* <button onClick={()=>callFun("Banana")}>Click Me</button> */}
  </div>

}

export default App
