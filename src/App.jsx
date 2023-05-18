import AddBook from "./AddBook";
import BookList from "./BookList";
import Counter from "./Counter";

function Bookshelf(props) {
  return (
    <div>
      {/* DO NOT DESCTRUCTURE PROPS, it's a solid thing. */}
      <h1>{props.name}&apos;s Bookshelf</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Bookshelf name="Sam"/>
      <Counter />
    </>
  );
}