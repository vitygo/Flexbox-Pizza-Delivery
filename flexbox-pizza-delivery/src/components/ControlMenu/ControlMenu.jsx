import "./ControlMenu.css"
import React, {useState} from 'react'


export default function({setUserInput, userInput}){

   

    let userInputCode = userInput



    return(
        <section className="control-menu">
            <div className="control-menu__header">
                <h2 className='header__title'>{userInputCode}</h2>
            </div>
            <div className="control-menu__body">
                <div className="body__text"></div>
                <div className="body__code-input-container">
                    <textarea className='body__code-input' onChange={(e) => setUserInput(e.target.value)}/>
                </div>
            </div>

        </section> 
    )
}