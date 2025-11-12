const TodoList = () => {
  return (
    <div className="bg-white w-full max-w-xl mx-auto p-6 rounded-2xl shadow-md border border-gray-100 mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Todos</h2>

      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl mb-3 hover:bg-gray-100 transition">
        <span className="text-gray-700">This is first data</span>
        <div className="flex items-center gap-3">
          <button className="text-green-500 hover:text-green-600 transition">
            ✔
          </button>
          <button className="text-blue-500 hover:text-blue-600 transition">
            ✏️
          </button>
          <button className="text-red-500 hover:text-red-600 transition">
            🗑
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
