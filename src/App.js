import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() {
  const [items, setItems] = useState([]);

  function addItem(text) {
    setItems([...items, { text }]);
  }

  function deleteItem(index) {
    setItems(items.filter((item, i) => i !== index));
  }

  function updateItem(index, text) {
    const newItems = [...items];
    newItems[index].text = text;
    setItems(newItems);
  }

  return (
    <div>
      <h1 className="text-3xl text-indigo-700 font-semibold">Todo List</h1>
      <AddTodo addItem={addItem} />
      <TodoList items={items} deleteItem={deleteItem} updateItem={updateItem} />
    </div>
  );
}

export default App;
