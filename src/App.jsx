import { createSignal, Show } from "solid-js";

import AddBook from "./AddBook";
import BookList from "./BookList";
import Counter from "./Counter";

const initialBooks = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

function Bookshelf(props) {
  const [books, setBooks] = createSignal(initialBooks);
  const [showForm, setShowForm] = createSignal(false);

  const toggleForm = () => setShowForm(!showForm());

  return (
    <div>
      {/* DO NOT DESCTRUCTURE PROPS, it's a solid thing. */}
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

export default function App() {
  return (
    <>
      <Bookshelf name="Sam" />
      {/* <Counter /> */}
    </>
  );
}