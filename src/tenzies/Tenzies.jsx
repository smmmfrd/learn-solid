import { createEffect, createSignal, For } from "solid-js";

const dieResults = [1,2,3,4,5,6];

const rollDie = (prevValue) => {
	const filteredResults = dieResults.filter(val => val !== prevValue);
	return filteredResults[Math.floor(Math.random() * filteredResults.length)];
}

const startingValues = () => {
	return Array(5).fill(0).map(() => ({
		value: rollDie(0),
		locked: false
	}));
}

export default function Tenzies() {
	const [dice, setDice] = createSignal(startingValues());

	const handleRoll = () => {
		setDice(prevDice => prevDice.map(die => ({
			...die,
			value: die.locked ? die.value : rollDie(die.value),
		})));
	}

	createEffect(() => {
		if(dice().every(die => die.locked)) {
			let chosenValue = dice()[0].value;
			if(dice().every(die => die.value === chosenValue)) {
				setTimeout(() => setDice(startingValues), 100);
			} else {
				setDice(prevDice => prevDice.map(die => ({...die, locked: !die.locked})))
			}
		}
	});

	return (
		<>
			<h1>Tenzies</h1>
			<p>Try to make each dice the same value!</p>
			<For each={dice()} fallback={<p>no values</p>}>{(die, index) => {
				const locked = die.locked;
				return (
					<button
						style={{
							"color": `${locked ? "red" : "black"}`
						}}
						onClick={() => {
							setDice(prevDice => prevDice.map((die, i) => ({
								...die,
								locked: i === index() ? !locked : die.locked
							})))
						}}>
						{die.value}
					</button>
				)
			}
			}</For>
			<button onClick={handleRoll}>Roll Dice</button>
		</>
	);
}