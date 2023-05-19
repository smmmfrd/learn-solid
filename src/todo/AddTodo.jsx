import { createSignal } from "solid-js"

export default function AddTodo(props) {
	const [input, setInput] = createSignal("");

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
					props.setTodos(todos => [...todos, input()]);
					setInput("");
				}}
			>
				Add Todo
			</button>
		</form>
	)
}