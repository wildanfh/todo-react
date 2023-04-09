import React, { useState } from 'react';

function AddTodo(props) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    props.addItem(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center my-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-3 py-2 text-gray-700 border rounded shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        placeholder="Add a to-do item"
      />
      <button type="submit" className="ml-2 px-4 py-2 font-semibold text-white bg-indigo-500 rounded shadow hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
