import './PlayGround.css';
import React from 'react';

export default function PlayGround({ userInput , currentChalange}) {

    // Функція для парсингу CSS-рядка в JS-об'єкт
    const parseCSS = (cssString) => {
        const declarations = cssString.split(';').filter(item => item.trim() !== '');
        const parsedObject = {};
        declarations.forEach(declaration => {
            const parts = declaration.split(':');
            if (parts.length === 2) {
                const property = parts[0].trim();
                const value = parts[1].trim().replace(/['"]/g, '');
                // Конвертуємо властивості з дефісами в camelCase для React
                const camelCaseProperty = property.replace(/-(\w)/g, (_, char) => char.toUpperCase());
                parsedObject[camelCaseProperty] = value;
            }
        });
        return parsedObject;
    };

    // Перетворюємо введений код користувача в об'єкт стилів
    const userStyles = parseCSS(userInput);

    return(
        <>
        <section 
            className="playground-container" 
            style={userStyles} // Застосовуємо стилі безпосередньо тут
        >
            <div className="playground-container__delivery-guy">
                <img src='./delivery-guy.png' className="delivery-guy__img" alt='delivery guy'/>
            </div>

        </section>
        <section className="target-playground-container">
            <div className="playground-container__target">
            <img src='./flat.png' className="target__img" alt='target img'/>
            </div>

        </section>
        </>
        
    );
}