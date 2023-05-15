import palavras from "../palavras";
import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";


export default function App() {
	const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

	let [enabledAlphabet, setEnabledAlphabet] = useState(false);
	let [n_misses, setNMisses] = useState(0);
	let [letters, setLetters] = useState(new Map());
	let [word, setWord] = useState([]);
	let [isPlaying, toggleIsPlaying] = useState(false);
	let [gameStatus, setGameStatus] = useState('');

	function handleClick(letter) {
		let wrong = true;
		word.forEach((el) => {
			if (el === letter) wrong = false;
		});
		if (wrong) {
			setNMisses(n_misses + 1);
			checkEndGame(n_misses + 1);
			
		} else {
			checkEndGame(n_misses);
		}
		updateLetter(letter);
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
	}
	
	function gameStart() {
		resetLetters();
		setNMisses(0);
		setEnabledAlphabet(true);
		setGameStatus('playing');
		chooseRandomWord();
		toggleIsPlaying(true);
	}

	function checkEndGame(misses) {
		if (misses === 6) {
			setGameStatus('loss');
			setEnabledAlphabet(false);
			return;
		}
		let correct = true;
		word.forEach(letter => {
            if (!letters.get(letter)) {
				correct = false;
			}
        });
		if (correct) {
			setGameStatus('win');
			setEnabledAlphabet(false);
			return;
		} 
	}

	return (
		<>
			<Jogo 
				n_misses={n_misses}
				word={word}
				isPlaying={isPlaying}
				gameStart={gameStart}
				letters={letters}
				status={gameStatus}
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