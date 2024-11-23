import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const { id, title, handleDelete, handleEdit, handleDoneTask, completed } = this.props;

        return (
            <li className="list-group-item d-flex justify-content-between align-items-center my-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h6 className={`mt-1 mb-0 ${completed ? 'completed-task' : ''}`} style={{ flex: 1 }}>
                    {title}
                </h6>
                <div className="todo-icon">
                    <span 
                        className={`mx-2 cursor-pointer ${completed ? 'text-success' : 'text-secondary'}`}
                        onClick={() => handleDoneTask(id)}
                        title={completed ? 'Mark as incomplete' : 'Mark as complete'}
                    >
                        <i className={`${completed ? 'far fa-check-square' : 'far fa-square'}`} />
                    </span>
                    <span 
                        className="mx-2 text-warning cursor-pointer"
                        onClick={handleEdit}
                        title="Edit task"
                    >
                        <i className="fas fa-pen" />
                    </span>
                    <span 
                        className="mx-2 text-danger cursor-pointer"
                        onClick={handleDelete}
                        title="Delete task"
                    >
                        <i className="fas fa-trash" />
                    </span>
                </div>
            </li>
        );
    }
}