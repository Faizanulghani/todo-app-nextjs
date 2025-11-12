import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col max-w-xl mx-auto gap-3 mt-6">
      <AddTodo />
      <TodoList />
    </div>
  );
}
