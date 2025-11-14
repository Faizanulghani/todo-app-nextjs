"use client";
import { useState } from "react";
import TodoList from "./TodoList";
import useTodos from "@/hooks/useTodos";

const AddTodo = () => {
  const {
    todos,
    addTodo,
    updateTodo,
    toggleComplete,
    todoDelete,
    fetchTodo,
  } = useTodos();

  let [title, setTitle] = useState();

  let handleAdd = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  return (
    <>
      <form
        onSubmit={handleAdd}
        className="flex w-full  bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200"
      >
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write your todo..."
          className="flex-1 p-4 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-6 font-semibold hover:bg-green-600 transition-all duration-200 cursor-pointer"
        >
          Add Todo
        </button>
      </form>

      <TodoList
        fetchTodo={fetchTodo}
        todos={todos}
        toggleComplete={toggleComplete}
        updateTodo={updateTodo}
        deleteTodo={todoDelete}
      />
    </>
  );
};

export default AddTodo;
