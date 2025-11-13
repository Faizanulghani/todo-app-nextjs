const TodoList = ({ fetchTodo, todos }) => {
  const todoCompleted = async (todo) => {
    await fetch("http://localhost:3000/api/todos", {
      method: "PATCH",
      body: JSON.stringify({ id: todo._id, completed: !todo.completed }),
    });
    fetchTodo();
  };
  const todoDelete = async (todo) => {
    await fetch("http://localhost:3000/api/todos", {
      method: "DELETE",
      body: JSON.stringify({ id: todo._id }),
    });
    fetchTodo();
  };

  return (
    <div className="bg-white w-full max-w-xl mx-auto p-6 rounded-2xl shadow-md border border-gray-100 mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Todos</h2>

      {todos.map((todo) => {
        return (
          <div
            key={todo._id}
            className="flex items-center justify-between bg-gray-50 p-4 rounded-xl mb-3 hover:bg-gray-100 transition"
          >
            <span
              className={`text-gray-700 ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.title}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => todoCompleted(todo)}
                className="text-green-500 hover:text-green-600 transition"
              >
                {todo.completed ? "❌" : "✔"}
              </button>
              <button className="text-blue-500 hover:text-blue-600 transition">
                ✏️
              </button>
              <button
                onClick={() => todoDelete(todo)}
                className="text-red-500 hover:text-red-600 transition"
              >
                🗑
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
