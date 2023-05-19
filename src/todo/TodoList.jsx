import { createSignal, For } from "solid-js";
import AddTodo from "./AddTodo";

export default function TodoList(props) {
	const [todos, setTodos] = createSignal([]);

	return (
		<>
			<h1>{props.name}&apos;s Todo List from Solid</h1>

			<ul>
				<For each={todos()}>
					{todo => (
						<li>{todo}</li>
					)}
				</For>
			</ul>

			<AddTodo setTodos={setTodos}/>
		</>
	)
}