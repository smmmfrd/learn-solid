import { createEffect, createSignal, For, Switch } from "solid-js";

import { Playing, Won, Lost } from "./GameStates"

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
				setTimeout(() => setDice(startingValues), 500);
			} else {
				setTimeout(() => {
					setDice(prevDice => prevDice.map(die => ({...die, locked: !die.locked})))
				}, 500);
			}
		}
	});

	return (
		<>
			<h1>Tenzies</h1>

			<Switch fallback={<Playing />}>
				<Match when={dice().every(die => die.locked) && dice().reduce((total, die) => total + die.value, 0) % 5 === 0}>
					<Won />
				</Match>
				<Match when={dice().every(die => die.locked) && dice().reduce((total, die) => total + die.value, 0) % 5 !== 0}>
					<Lost />
				</Match>
			</Switch>

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

			<br />
			<button onClick={handleRoll}>Roll Dice</button>
		</>
	);
}