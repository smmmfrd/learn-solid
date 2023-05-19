import { createEffect, createSignal, Index } from "solid-js";
import AddTodo from "./AddTodo";

export default function TodoList(props) {
	const [todos, setTodos] = createSignal([]);

	

	return (
		<>
			<h1>{props.name}&apos;s Todo List from Solid</h1>

			<ul>
				<Index each={todos()}>
					{(todo, i) => (
						<Todo
							text={todo().text}
							done={todo().done}
							setDone={(value) => {
								setTodos(prev => {
									prev[i].done = value;
									return [...prev];
								});
							}} />
					)}
				</Index>
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
				checked={props.done}
				onChange={() => setDone(!done())}
			/>
		</li>
	)
}