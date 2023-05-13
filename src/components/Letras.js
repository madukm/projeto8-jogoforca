export default function Letras(props) {
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    
    return (
        <div class="letters">
            {alfabeto.map( letra => <Letra key={letra} letter={letra}/>)}
        </div>
    );    
}

function Letra(props) {
    return (
        <div class="letter">
            <button type="button" disabled>{props.letter}</button>
        </div>
    );
}