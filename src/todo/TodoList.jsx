import { createEffect, createSignal, For } from "solid-js";
import AddTodo from "./AddTodo";

export default function TodoList(props) {
	const [todos, setTodos] = createSignal([]);

	setTodos(JSON.parse(localStorage.getItem('solid-todos')));

	createEffect(() => {
		localStorage.setItem('solid-todos', JSON.stringify(todos()));
	})

	return (
		<>
			<h1>{props.name}&apos;s Todo List from Solid</h1>

			<ul>
				<For each={todos()}>
					{(todo, i) => (
						<Todo
							text={todo.text}
							done={todo.done}
							setDone={(value) => {
								setTodos(prev => {
									prev[i()].done = value;
									return [...prev];
								});
							}} 
							deleteThis={() => {
								setTodos(prev => {
									return prev.filter((_, index) => index !== i());
								})
							}}
							/>
					)}
				</For>
			</ul>

			<AddTodo setTodos={setTodos} />
		</>
	)
}

function Todo(props) {
	const [done, setDone] = createSignal(props.done);

	
	createEffect(() => {
		props.setDone(done());
	});

	return (
		<li style={{
			"text-decoration": `${done() ? "line-through" : "none"}`,
			"color": `${done() ? "grey" : "inherit"}`
		}}>
			{props.text}
			<input type="checkbox"
				checked={done()}
				onInput={() => setDone(!done())}
			/>
			<button
				onClick={props.deleteThis}
			>
				Delete
			</button>
		</li>
	)
}