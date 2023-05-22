import { createSignal, For } from "solid-js";

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

	return (
		<>
			<h1>Tenzies</h1>
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