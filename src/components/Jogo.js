
export default function Jogo(props) {
    // const forca_img = [
    //     { 0: "assets/forca0.png"},
    //     { 1: "assets/forca1.png"},
    //     { 2: "assets/forca2.png"},
    //     { 3: "assets/forca3.png"},
    //     { 4: "assets/forca4.png"},
    //     { 5: "assets/forca5.png"},
    //     { 6: "assets/forca6.png"}
    // ];

    const forca_img = ['assets/forca0.png', 'assets/forca1.png', 'assets/forca2.png', 'assets/forca3.png', 'assets/forca4.png','assets/forca5.png','assets/forca6.png'];

    return (
        <div class="game"> 
            <div class="container">
                <div class="forca">
                    <img src={forca_img[props.forca]} />
                </div>
                <button> Escolher palavra </button>

            </div>
        </div>
    );
}