import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import '../index.css'; // Pastikan untuk mengimpor file CSS Anda

export default class TodoList extends Component {
    render() {
        const {
            items,
            updateTodosToShow,
            clearList,
            handleDelete,
            handleEdit,
            handleDoneTask,
            handleDeleteDoneTasks
        } = this.props;

        return (
            <Fragment>
                <h3 className="text-center mt-4" style={{ color: '#333', fontWeight: 'bold' }}>
                    Todo List
                </h3>

                <div className="flex-auto row mb-3 justify-content-center">
                    <div className="col-m-4 d-flex justify-content-center">
                        <button 
                            type="button"
                            className="btn button-spacing" 
                            style={{ backgroundColor: '#C63C51', color: 'white' }} // Warna sama untuk semua tombol
                            onClick={() => updateTodosToShow("all")}
                        >
                            Semua
                        </button>
                    </div>
                    <div className="col-m-4 d-flex justify-content-center">
                        <button 
                            type="button"
                            className="btn button-spacing" 
                            style={{ backgroundColor: '#C63C51', color: 'white' }} // Warna sama untuk semua tombol
                            onClick={() => updateTodosToShow("done")}
                        >
                            Selesai
                        </button>
                    </div>
                    <div className="col-m-4 d-flex justify-content-center">
                        <button 
                            type="button"
                            className="btn button-spacing" 
                            style={{ backgroundColor: '#C63C51', color: 'white' }} // Warna sama untuk semua tombol
                            onClick={() => updateTodosToShow("todo")}
                        >
                            Belum Selesai
                        </button>
                    </div>
                </div>

                {
                    items.length === 0 ? (
                        <div className="alert alert-warning text-center mt-4">
                            Belum ada apa-apa.
                        </div>
                    ) : (
                        <ul className="list-group my-5">
                            {
                                items.map(item => (
                                    <TodoItem
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        completed={item.completed}
                                        handleDelete={() => handleDelete(item.id)}
                                        handleEdit={() => handleEdit(item.id)}
                                        handleDoneTask={handleDoneTask}
                                    />
                                ))
                            }

                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <button 
                                        type="button"
                                        className="btn btn-block mt-1"
                                        style={{ backgroundColor: '#8C3061', color: 'white' }} // Warna sama untuk kedua tombol hapus
                                        onClick={handleDeleteDoneTasks}
                                    >
                                        Hapus Tugas Yang Selesai
                                    </button>
                                </div>
                                <div className="col-md-6">
                                    <button 
                                        type="button"
                                        className="btn btn-block mt-1"
                                        style={{ backgroundColor: '#8C3061', color: 'white' }} // Warna sama untuk kedua tombol hapus
                                        onClick={clearList}
                                    >
                                        Hapus Semua Tugas
                                    </button>
                                </div>
                            </div>
                        </ul>
                    )
                }
            </Fragment>
        );
    }
}