import { createSignal } from "solid-js"

export default function AddTodo(props) {
	const [input, setInput] = createSignal("");

	const newTodo = (text) => ({
		text,
		done: false
	});

	return (
		<form>
			<label>
				Add Todo
				<input type="text"
					value={input()}
					onInput={(e) => setInput(e.currentTarget.value)}
				/>
			</label>
			<button
				type="submit"
				onClick={(e) => {
					e.preventDefault();
					if (input().length > 0) {
						props.setTodos(todos => [...todos, newTodo(input())]);
					}
					setInput("");
				}}
			>
				Add Todo
			</button>
		</form>
	)
}