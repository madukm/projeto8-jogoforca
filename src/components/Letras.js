import { useState } from "react";

export default function Letras({enabledAlphabet, handleClick, letters}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    return (
        <div class="letters">
            {alfabeto.map( letra => 
                <Letra 
                    key={letra} 
                    letter={letra} 
                    isDisabled={!enabledAlphabet || letters.get(letra)}
                    handleClick={() => handleClick(letra)}/>)}
        </div>
    );    
}

function Letra({letter, isDisabled, handleClick}) {
    return (
        <div class="letter">
            <button type="button" 
                disabled={isDisabled} 
                onClick={handleClick}> 
            {letter.toUpperCase()} </button>
        </div>
    );
}