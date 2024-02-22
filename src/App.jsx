import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  // let counter = 15
  const addValue = () => {
    setCounter(++counter)
    if(counter>=20)
    {
      counter = 20
      setCounter(20)
    }
    // console.log("added")
  }
  const decreaseValue = () => {
    setCounter(--counter)
    if(counter<=0)
    {
      setCounter(0)
      counter = 0
    }
    // console.log("decreased")
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br /><br />
      <button onClick={decreaseValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
