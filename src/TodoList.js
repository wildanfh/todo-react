import React, { useState } from "react";

function TodoList(props) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  function handleEdit(index) {
    setEditingIndex(index);
    setEditText(props.items[index].text);
  }

  function handleSave(index) {
    props.updateItem(index, editText);
    setEditingIndex(null);
  }

  function handleCancel() {
    setEditingIndex(null);
    setEditText("");
  }

  return (
    <ul className="my-4">
      {props.items.map((item, index) => (
        <li key={index} className="flex items-center justify-between py-2">
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 border rounded shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
              />
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleSave(index)}
                  className="px-4 py-2 text-sm ml-3 font-semibold text-white bg-green-500 rounded shadow hover:bg-green-700 focus:outline-none focus:shadow-outline-green"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded shadow hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  style={{ color: "#4F46E5" }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
                {item.text}{" "}
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded shadow hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteItem(index)}
                  className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded shadow hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
