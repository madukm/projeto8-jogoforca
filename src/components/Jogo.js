import Letras from "./Letras";

export default function Jogo({n_misses, word, gameStart, letters, status}) {
   
    const forca_img = ['assets/forca0.png', 'assets/forca1.png', 'assets/forca2.png', 'assets/forca3.png', 'assets/forca4.png','assets/forca5.png','assets/forca6.png'];
    const underline = "_";

    function displayCurrWord() {
        let displayWord = [];
        word.forEach(letter => {
            if (letters.get(letter) == false) {
                displayWord.push(underline);
            } else {
                displayWord.push(letter);
            }
        });
        return displayWord;

    }

    let displayWord = displayCurrWord();

    return (
        <div class="game"> 
            <div class="container">
                <div class="forca">
                    <img data-test="game-image" src={forca_img[n_misses]} />
                </div>
                <div class="right">
                    <button data-test="choose-word"
                        disabled={status === "playing"}
                        onClick={gameStart}> Escolher palavra </button>
                    <div className={status} data-test="word">
                        {status === 'playing' ? displayWord.join(" ") : word}
                    </div>
                </div>
                
            </div>
        </div>
    );
}