import Counter from "./Counter";
import Bookshelf from "./library/Bookshelf";
import TodoList from "./todo/TodoList";

export default function App() {
  return (
    <>
      <TodoList name="Sam" />
      {/* <Bookshelf name="Sam" /> */}
      {/* <Counter /> */}
    </>
  );
}