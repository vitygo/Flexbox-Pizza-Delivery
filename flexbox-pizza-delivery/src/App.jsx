import React, { useState, useEffect } from "react";
import PlayGround from './components/PlayGround/PlayGround'
import ControlMenu from "./components/ControlMenu/ControlMenu"
import { challenges } from './chalanges'; // Import the challenge data

function App() {
  const [userInput, setUserInput] = useState('');
  const [currentLevel, setCurrentLevel] = useState(0); // State for the current level

  
  // Get the current challenge object
  const currentChallenge = challenges[currentLevel];


  useEffect(() => {
    console.log(currentLevel)
    console.log(challenges[currentLevel])

  },[currentLevel]);


  return (
    <>
    <main>
    <ControlMenu setUserInput={setUserInput} userInput={userInput}/>
    {/* Pass the currentChallenge as a prop */}
    <PlayGround userInput={userInput} currentChallenge={currentChallenge}/>
    <button onClick={() => setCurrentLevel(prev => prev + 1)}>next-level</button>
    
    </main>
    </>
  )
}

export default App