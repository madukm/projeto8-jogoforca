import palavras from "../palavras";
import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";


export default function App() {
	let [enabledAlphabet, setEnabledAlphabet] = useState(false);
	let [n_misses, setNMisses] = useState(0);
	let [disabledKeys, setDisabledKeys] = useState([]);
	let [word, setWord] = useState("");
	let [currWord, updateWord] = useState([]);
	let [isPlaying, toggleIsPlaying] = useState(false);

	function handleClick(letter) {

	}

	function chooseRandomWord() {
		const randomWord = palavras[Math.floor(Math.random() * palavras.length)];
		setWord(randomWord);
		updateWord(new Array(randomWord.length).fill("_"));
		return randomWord;
	}
	
	function gameStart() {
		setEnabledAlphabet(true);
		chooseRandomWord();
		toggleIsPlaying(true);
	}

	return (
		<>
			<Jogo 
				n_misses={n_misses}
				currWord={currWord}
				isPlaying={isPlaying}
				gameStart={gameStart}
			/>
			<div class="center">
                <Letras 
					enabledAlphabet={enabledAlphabet}
					handleClick={handleClick}/>
            </div>
		</>

	);
}