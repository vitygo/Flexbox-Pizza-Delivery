import React, { useState } from "react";
import PlayGround from './components/PlayGround/PlayGround'
import ControlMenu from "./components/ControlMenu/ControlMenu"


function App() {


  const [userInput, setUserInput] = useState('')
  


  return (
    <>
    <main >
    <ControlMenu setUserInput={setUserInput} userInput={userInput}/>
    <PlayGround userInput={userInput}/>
    </main>

    </>
  )
}

export default App
