import palavras from "./palavras";
import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";


export default function App() {
	let [forca, setForca] = useState(0);
	let [alphabet, setAlphabet] = useState([]);

	return (
		<>
			<Jogo forca={forca} setForca={setForca}/>
		</>
		
	);
}