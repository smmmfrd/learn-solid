import { createEffect, createSignal } from "solid-js"

export default function Counter() {
	const [count, setCount] = createSignal(0);

	createEffect(() => {
		console.log(count());
	})

	const increment = () => {
		setCount(count() + 1);
	}

	return (
		<div>
			<p>Current count: {count()}</p>
			<button onClick={increment}>Increment Count</button>
		</div>
	)
}