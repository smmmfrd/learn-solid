export default function AddBook() {
	return (
		<form>
			<label>
				Book Name
				<input id="title" />
			</label>
			<label>
				Author
				<input id="author" />
			</label>
			<button type="submit">Add Book</button>
		</form>
	)
}