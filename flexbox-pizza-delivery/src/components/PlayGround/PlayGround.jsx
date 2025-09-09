import './PlayGround.css'
import React, {useState,  useEffect} from 'react'
import { parseCSS, areObjectsEqual } from '../../utils' // Import the utility functions

export default function PlayGround({ userInput, currentChallenge }){
    
    // Use isCorrect, not trueInput
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        // Only run if a challenge is provided
        if (!currentChallenge) {
            return;
        }

        const parsedUserInput = parseCSS(userInput);
        const parsedCorrectAnswer = parseCSS(currentChallenge.correctAnswer);

        setIsCorrect(areObjectsEqual(parsedUserInput, parsedCorrectAnswer));

    }, [userInput, currentChallenge]); // Add currentChallenge to the dependency array

    return(
        <section className={`playground-container ${isCorrect ? currentChallenge.cssClass : ''}`}>
            <div className="playground-container__delivery-guy">
                <img src='./delivery-guy.png' className="delivery-guy__img" alt='delivery guy'/>
            </div>
            <div className="playground-container__delivery-guy">
                <img src='./delivery-guy.png' className="delivery-guy__img" alt='delivery guy'/>
            </div>
        </section>
    )
}