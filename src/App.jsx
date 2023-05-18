import AddBook from "./AddBook";
import BookList from "./BookList";

function Bookshelf() {
  return (
    <div>
      <h1>My Bookshelf</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Bookshelf />
    </>
  );
}