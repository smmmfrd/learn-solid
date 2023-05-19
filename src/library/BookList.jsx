import { For } from "solid-js";

export default function BookList(props) {
	
	const totalBooks = () => props.books.length;

	return (
		<>
		<h2>My Books ({totalBooks()})</h2>
		<ul>
			<For each={props.books}>
				{(book) => 
					<li>
						{book.title} <i>({book.author})</i>
					</li>
				}
			</For>
		</ul>
		</>
	)
}