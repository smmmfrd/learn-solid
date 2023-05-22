import { createSignal, For } from "solid-js";

const rollDie = () => {
	return Math.ceil(Math.random() * 6);
}

const startingValues = () => {
	return Array(5).fill(0).map(() => ({
		value: rollDie(),
		locked: false
	}));
}

export default function Tenzies() {
	const [dice, setDice] = createSignal(startingValues());

	const handleRoll = () => {
		setDice(prevDice => prevDice.map(die => ({
			...die,
			value: die.locked ? die.value : rollDie(),
		})))
	}

	return (
		<>
			<h1>Tenzies</h1>
			<For each={dice()} fallback={<p>no values</p>}>{(die, index) =>
				<button>
					{die.value}
				</button>
			}</For>
			<button onClick={handleRoll}>Roll Dice</button>
		</>
	);
}