import { createSignal } from "solid-js";

const emptyBook = { title: "", author: "" };

export default function AddBook(props) {
	const [newBook, setNewBook] = createSignal(emptyBook);

	const addBook = (e) => {
		e.preventDefault();
		props.setBooks((books) => [...books, newBook()]);
		setNewBook(emptyBook);
	}

	return (
		<form>
			<label>
				Book Name
				<input
					id="title"
					value={newBook().title}
					onInput={(e) => {
						setNewBook({...newBook(), title: e.currentTarget.value});
					}}
				/>
			</label>
			<label>
				Author
				<input
					id="author"
					value={newBook().author}
					onInput={(e) => {
						setNewBook({...newBook(), author: e.currentTarget.value});
					}}
				/>
			</label>
			<button type="submit" onClick={addBook}>Add Book</button>
		</form>
	)
}