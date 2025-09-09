import React, { useState, useEffect } from "react";
import PlayGround from './components/PlayGround/PlayGround'
import ControlMenu from "./components/ControlMenu/ControlMenu"
import { challenges } from './chalanges'; // Import the challenge data

function App() {
  const [userInput, setUserInput] = useState('display: flex;');
  const [currentLevel, setCurrentLevel] = useState(0); // State for the current level

  useEffect(() => {
    setUserInput('display: flex;')

  },[currentLevel])

  
  // Get the current challenge object
  const currentChallenge = challenges[currentLevel];


  useEffect(() => {
    console.log(currentLevel)
    console.log(challenges[currentLevel])

  },[currentLevel]);


  return (
    <>
    <main>
    <ControlMenu setUserInput={setUserInput} userInput={userInput} currentLevel={currentLevel}/>
    {/* Pass the currentChallenge as a prop */}
    <PlayGround userInput={userInput} currentChallenge={currentChallenge} setCurrentLevel={setCurrentLevel} currentLevel={currentLevel} setUserInput={setUserInput}/>
    {/* <button onClick={() => setCurrentLevel(prev => prev + 1)}>next-level</button> */}
    
    </main>
    </>
  )
}

export default App