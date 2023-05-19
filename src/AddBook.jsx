import { createResource, createSignal, For, Show } from "solid-js";
import { searchBooks } from "./api/utils";

export default function AddBook(props) {
	const [input, setInput] = createSignal("");
	const [query, setQuery] = createSignal("");

	const [data] = createResource(query, searchBooks);

	return (
		<>
			<form>
				<label>
					Search Books
					<input
						id="title"
						value={input()}
						onInput={(e) => {
							setInput(e.currentTarget.value);
						}}
					/>
				</label>
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						setQuery(input());
					}}
				>
					Add Book
				</button>
			</form>

			<Show
				when={!data.loading}
				fallback={<p>Searching...</p>}
			>
				<ul>
					<For each={data()}>
						{(book) => (
							<li>
								{book.title} by {book.author}{" "}
								<button
									aria-label={`Add ${book.title} by ${book.author} to the bookshelf`}
									onClick={(e) => {
										e.preventDefault();
										props.setBooks((books) => [...books, book]);
									}}
								>
									Add
								</button>
							</li>
						)}
					</For>
				</ul>

			</Show>
		</>
	);
}