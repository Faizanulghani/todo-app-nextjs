"use client";
import { useState } from "react";

const AddTodo = () => {
  let [title, setTitle] = useState();
  const addTodo = async (e) => {
    e.preventDefault();
    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    setTitle("");
  };
  return (
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
  );
};

export default AddTodo;
