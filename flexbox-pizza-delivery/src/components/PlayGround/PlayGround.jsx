import './PlayGround.css'

import React, {useState,  useEffect} from 'react'



export default function PlayGround({userInput}){
    

    const [trueInput, setTrueInput] = useState(false)

    useEffect(() => {

        const normalizedInput = userInput.replace(/\s/g, '').replace(/"/g, "'").toLowerCase();
        if (normalizedInput === "justify-content:center" || normalizedInput === "justify-content:center;") {
            setTrueInput(true);
        } else {
            setTrueInput(false);
        }

    }, [userInput]);

    

    return(
        <section className={`playground-container ${trueInput ? 'true-f-center' : ''}`}>
            <div className="playground-container__delivery-guy">
                <img src='./delivery-guy.png' className="delivery-guy__img" alt='delivery guy'/>
            </div>
        </section>
    )
}