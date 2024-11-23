import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
    const [items, setItems] = useState(
        localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
    );
    const [itemsToShow, setItemsToShow] = useState("all");
    const [id, setId] = useState(uuid());
    const [item, setItem] = useState('');
    const [, setEditItem] = useState(false); //editItem

    useEffect(() => {
        // Save items to local storage whenever items change
        localStorage.setItem('todos', JSON.stringify(items));
    }, [items]);

    const handleChange = event => {
        setItem(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        const newItem = {
            id: id,
            title: item,
            completed: false
        };

        if (item.length > 0) {
            setItems([...items, newItem]);
            setId(uuid());
            setItem('');
            setEditItem(false);
        }
    };

    const updateTodosToShow = string => {
        setItemsToShow(string);
    };

    const handleDoneTask = id => {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        });

        setItems(updatedItems);
    };

    const handleDelete = id => {
        const filteredItems = items.filter(item => item.id !== id);
        setItems(filteredItems);
    };

    const handleEdit = id => {
		console.log("Editing item with id:", id);
        const filteredItems = items.filter(item => item.id !== id);
        const selectedItem = items.find(item => item.id === id);

        setItems(filteredItems);
        setId(id);
        setItem(selectedItem.title);
        setEditItem(true);
    };

    const handleDeleteDoneTasks = () => {
        const filteredItems = items.filter(item => item.completed === false);
        setItems(filteredItems);
    };

    const clearList = () => {
        setItems([]);
        localStorage.removeItem('todos'); // Remove data from local storage
    };

    let displayedItems = [];
    if (itemsToShow === "all") {
        displayedItems = items;
    } else if (itemsToShow === "todo") {
        displayedItems = items.filter(item => !item.completed);
    } else if (itemsToShow === "done") {
        displayedItems = items.filter(item => item.completed);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 col-md-8 mx-auto mt-4">
                    <h3 className="text-capitalize text-center" style={{ color: '#333', fontWeight: 'bold' }}>Todo Input</h3>
                    <TodoInput
                        item={item}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                    <TodoList
                        items={displayedItems}
                        clearList={clearList}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        handleDoneTask={handleDoneTask}
                        handleDeleteDoneTasks={handleDeleteDoneTasks}
                        updateTodosToShow={updateTodosToShow}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;