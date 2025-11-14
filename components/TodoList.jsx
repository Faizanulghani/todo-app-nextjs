import { useState } from "react";

const TodoList = ({ fetchTodo, todos }) => {
  let [editId, setEditId] = useState(null);
  let [title, setTitle] = useState("");

  const todoCompleted = async (todo) => {
    await fetch("http://localhost:3000/api/todos", {
      method: "PATCH",
      body: JSON.stringify({ id: todo._id, completed: !todo.completed }),
    });
    fetchTodo();
  };

  const todoTitle = async (todo) => {
    await fetch("http://localhost:3000/api/todos", {
      method: "PATCH",
      body: JSON.stringify({ id: todo._id, title }),
    });
    setEditId(null);
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
            <span className={`text-gray-700`}>
              {editId === todo._id ? (
                <div className="flex items-center gap-2">
                  <input
                    className="border border-gray-300 p-2 rounded-lg w-40 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                  />

                  <button
                    onClick={() => todoTitle(todo)}
                    className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition shadow-sm"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <span className={todo.completed ? "line-through" : ""}>
                  {todo.title}
                </span>
              )}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => todoCompleted(todo)}
                className="text-green-500 hover:text-green-600 transition"
              >
                {todo.completed ? "❌" : "✔"}
              </button>
              <button
                onClick={() => {
                  setEditId(todo._id);
                  setTitle(todo.title);
                }}
                className="text-blue-500 hover:text-blue-600 transition"
              >
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
