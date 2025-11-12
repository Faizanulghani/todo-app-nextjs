const AddTodo = () => {
  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      <div className="flex w-full max-w-xl bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">
        <input
          type="text"
          placeholder="Write your todo..."
          className="flex-1 p-4 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
        />
        <button className="bg-green-500 text-white px-6 font-semibold hover:bg-green-600 transition-all duration-200 cursor-pointer">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
