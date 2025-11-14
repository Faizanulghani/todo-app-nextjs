import React from "react";

const TodoEdit = ({ setTitle, title, setEditId, todo, fetchTodo }) => {
  const todoTitle = async (todo) => {
    await fetch("http://localhost:3000/api/todos", {
      method: "PATCH",
      body: JSON.stringify({ id: todo._id, title }),
    });
    setEditId(null);
    fetchTodo();
  };
  return (
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
  );
};

export default TodoEdit;
