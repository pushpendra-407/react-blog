import { useState } from "react"
import Header from "./Header"

export default function User() {
  // const[fruit, setFruite] = useState("Guava")
  // const handleFruit = () => {
  //   setFruite("Apple")
  // }

  // const[count, setCount] = useState(1)
  // const [display, setDisplay] = useState(true)
  const [count, setCount] = useState(1)

  return (
    <div>
      {/* <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count*2)}>Update Counter</button> */}


      {
      /*
      display and hide component
      <label className="switch" >
        <label htmlFor="css">Check button to display text</label>
        <input type="checkbox" checked={display}  // Add this!
          onChange={() => setDisplay(!display)} />
        <span className="slider round" />

        {display ? <Header /> : null}
      </label> */}

      <h1>{count}</h1>
      <button onClick={() => setCount(count==0? count+1:
        count==1? count*2.0:
        count==2? count/2.5:
        count==3? count%3:
        count+1
      )}>Update Counter</button>
      {
        count==0 ? <h1>Counter 0</h1>:
        count==1 ? <h1>Counter 1</h1>:
        count==2 ? <h1>Counter 2</h1>:
        count==3 ? <h1>Counter 3</h1>:
        count==4 ? <h1>Counter 4</h1>:
        <h1>Counter not found</h1>
      }

    </div>
  )
}
