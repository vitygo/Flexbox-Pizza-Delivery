import './PlayGround.css';
import React, { useState, useEffect } from 'react';
import { parseCSS, areObjectsEqual } from '../../utils'; 


export default function PlayGround({ userInput, currentChallenge,setCurrentLevel,currentLevel,setUserInput}) {


    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {

        if (currentChallenge) {
            const parsedUserInput = parseCSS(userInput);
            const parsedCorrectAnswer = parseCSS(currentChallenge.correctAnswer);
            const correct = areObjectsEqual(parsedUserInput, parsedCorrectAnswer);
            if (correct) {
                setIsCorrect(true);
                setCurrentLevel(prev => prev + 1);
                setUserInput('dispaly: flex;');
                console.log(currentLevel)
                

                }

        }
    }, [userInput, currentChallenge]);

   
    const userStyles = parseCSS(userInput);

    const targetStyles = parseCSS(currentChallenge?.targetPosition || '');
    

    return(
        <>
        <section
            className="playground-container"
            style={userStyles} 
        >
            <div className="playground-container__delivery-guy">
                <img src='./delivery-guy.png' className="delivery-guy__img" alt='delivery guy'/>
            </div>
        </section>
        
        <section className="target-playground-container" style={targetStyles}>
            <div className="playground-container__target">
                <img src='./flat.png' className="target__img" alt='target img'/>
            </div>
        </section>
        
  
        </>
    );
}