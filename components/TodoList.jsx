import { useState } from "react";
import TodoEdit from "./TodoEdit";

const TodoList = ({
  todos,
  toggleComplete,
  updateTodo,
  deleteTodo,
}) => {
  let [editId, setEditId] = useState(null);
  let [title, setTitle] = useState("");

  const todoCompleted = async (todo) => {
    toggleComplete(todo._id, todo.completed);
  };

  const todoDelete = async (todo) => {
    deleteTodo(todo._id);
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
                <TodoEdit
                  title={title}
                  setTitle={setTitle}
                  setEditId={setEditId}
                  todo={todo}
                  updateTodo={updateTodo}
                />
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
