"use client";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";

const AddTodo = () => {
  let [title, setTitle] = useState();
  let [todos, setTodos] = useState([]);
  const fetchTodo = async () => {
    let res = await fetch("http://localhost:3000/api/todos");
    const todos = await res.json();
    setTodos(todos);
  };

  useEffect(() => {
    fetchTodo();
  }, []);
  const addTodo = async (e) => {
    e.preventDefault();
    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    fetchTodo();
    setTitle("");
  };
  return (
    <>
      <form className="flex w-full  bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write your todo..."
          className="flex-1 p-4 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
        />
        <button
          onClick={addTodo}
          type="submit"
          className="bg-green-500 text-white px-6 font-semibold hover:bg-green-600 transition-all duration-200 cursor-pointer"
        >
          Add Todo
        </button>
      </form>
      <TodoList fetchTodo={fetchTodo} todos={todos} />
    </>
  );
};

export default AddTodo;
