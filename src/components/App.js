import palavras from "../palavras";
import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";


export default function App() {
	const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
	const initialMap = new Map();
	for (const l of alfabeto) {
		initialMap.set(l, false);
	} 

	let [enabledAlphabet, setEnabledAlphabet] = useState(false);
	let [n_misses, setNMisses] = useState(0);
	let [letters, setLetters] = useState(initialMap);
	// let [disabledKeys, setDisabledKeys] = useState([]);
	let [word, setWord] = useState([]);
	let [currWord, updateWord] = useState([]);
	let [isPlaying, toggleIsPlaying] = useState(false);

	function checkLetter(letter) {
		let wrong = true;
		word.forEach((el) => {
			if (el === letter) {
				// const newMap = new Map(letters);
				// newMap.set(letter, true);
				// setLetters(newMap);
				wrong = false;
			}
		});
		if (wrong) {
			setNMisses(n_misses + 1);
		}
		updateLetter(letter);
	}

	function handleClick(letter) {
		checkLetter(letter);
	}

	function updateLetter(letter) {
		setLetters(new Map(letters.set(letter, true)));
	}

	function resetLetters() {
		const newMap = new Map();
		for (const key of alfabeto) {
			newMap.set(key, false);
		}
		setLetters(newMap);
	} 

	function chooseRandomWord() {
		const randomWord = palavras[Math.floor(Math.random() * palavras.length)];
		setWord([...randomWord]);
		updateWord(new Array(randomWord.length).fill("_"));
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
				word={word}
				isPlaying={isPlaying}
				gameStart={gameStart}
				letters={letters}
			/>
			<div class="center">
                <Letras 
					enabledAlphabet={enabledAlphabet}
					handleClick={handleClick}
					letters={letters}/>
            </div>
		</>

	);
}