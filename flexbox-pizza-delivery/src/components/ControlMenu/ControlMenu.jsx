import "./ControlMenu.css"
import React, {useState} from 'react'


export default function({setUserInput, userInput}){

   

    let userInputCode = userInput



    return(
        <section className="control-menu">
            <div className="control-menu__header">
                <h2 className='header__title'>FLEXBOX PIZZA DELIVERY</h2>
            </div>
            <div className="control-menu__body">
                <div className="body__text"></div>
                <div className="body__code-input-container">
                    <div className="code-input-container__line-number">
                        <ul className='line-number_number-list'>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                    <textarea  value={userInput} className='body__code-input' rows="5" onChange={(e) => setUserInput(e.target.value)}/>
                </div>
            </div>

        </section> 
    )
}