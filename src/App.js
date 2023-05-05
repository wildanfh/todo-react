import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, set } from "firebase/database";
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  databaseURL: "https://todo-app-59ac8-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Read the initial data from the database
    const itemsRef = ref(database, 'items');
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setItems(data);
      }
    });
  }, []);

  function addItem(text) {
    const newItems = [...items, { text }];
    // Write the new data to the database
    set(ref(database, 'items'), newItems);
  }

  function deleteItem(index) {
    const newItems = items.filter((item, i) => i !== index);
    // Write the new data to the database
    set(ref(database, 'items'), newItems);
  }

  function updateItem(index, text) {
    const newItems = [...items];
    newItems[index].text = text;
    // Write the new data to the database
    set(ref(database, 'items'), newItems);
  }

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
