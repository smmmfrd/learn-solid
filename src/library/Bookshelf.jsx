import { createSignal, Show } from "solid-js";

import AddBook from "./AddBook";
import BookList from "./BookList";

const initialBooks = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

// DO NOT DESCTRUCTURE PROPS, it's a solid thing.
export default function Bookshelf(props) {
  const [books, setBooks] = createSignal(initialBooks);
  const [showForm, setShowForm] = createSignal(false);

  const toggleForm = () => setShowForm(!showForm());

  return (
    <div>
      <h1>{props.name}&apos;s Bookshelf</h1>
      <BookList books={books()} />
      <Show
        when={showForm()}
        fallback={<button onClick={toggleForm}>Add a Book</button>}
      >
        <AddBook setBooks={setBooks} />
        <button onClick={toggleForm}>Finished Adding Books</button>
      </Show>
    </div>
  );
}