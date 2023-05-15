import Letras from "./Letras";

export default function Jogo({n_misses, currWord, isPlaying, gameStart}) {
   
    const forca_img = ['assets/forca0.png', 'assets/forca1.png', 'assets/forca2.png', 'assets/forca3.png', 'assets/forca4.png','assets/forca5.png','assets/forca6.png'];

    return (
        <div class="game"> 
            <div class="container">
                <div class="forca">
                    <img src={forca_img[n_misses]} />
                </div>
                <div class="right">
                    <button 
                        disabled={isPlaying}
                        onClick={gameStart}> Escolher palavra </button>
                    <div class="currWord">
                        {currWord.join(" ")}
                    </div>
                </div>
                
            </div>
        </div>
    );
}