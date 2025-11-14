"use client";
import { useEffect, useState } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  const fetchTodo = async () => {
    try {
      let res = await fetch("/api/todos");
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      setError("Failed to fetch todos");
    }
  };

  const addTodo = async (title) => {
    try {
      await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({ title }),
      });
      fetchTodo();
    } catch (error) {
      setError("Failed to add todo");
    }
  };

  const updateTodo = async (id, title) => {
    try {
      await fetch("/api/todos", {
        method: "PATCH",
        body: JSON.stringify({ id, title }),
      });
      fetchTodo();
    } catch (error) {
      setError("Update failed");
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      await fetch("/api/todos", {
        method: "PATCH",
        body: JSON.stringify({ id, completed: !completed }),
      });
      fetchTodo();
    } catch (error) {
      setError("Failed to update status");
    }
  };

  const todoDelete = async (id) => {
    try {
      await fetch("/api/todos", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      fetchTodo();
    } catch (error) {
      setError("Failed to delete todo");
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return {
    todos,
    addTodo,
    updateTodo,
    toggleComplete,
    todoDelete,
    fetchTodo,
  };
}
