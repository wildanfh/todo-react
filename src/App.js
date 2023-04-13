import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

function App() {
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    return storedItems ? storedItems : [];
  });

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

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <h1 className="text-3xl text-indigo-700 font-semibold">Todo List</h1>
      <AddTodo addItem={addItem} />
      <TodoList items={items} deleteItem={deleteItem} updateItem={updateItem} />
      <Footer />
    </div>
  );
}

export default App;
