import React, { Component } from 'react';

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props;

        return (
            <div className="card card-body my-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" style={{ backgroundColor: '#800000', color: 'white' }}> {/* Merah marun */}
                                <i className="fas fa-book" />
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Aktivitas Baru"
                            value={item}
                            onChange={handleChange}
                            style={{ borderRadius: '5px', borderColor: '#ccc' }}
                        />
                    </div>

                    <button 
                        type="submit"
                        className="btn btn-block mt-3" // Menghapus kelas btn-success dan btn-info
                        style={{ 
                            borderRadius: '5px', 
                            padding: '10px 20px', 
                            backgroundColor: '#800000', // Merah marun
                            color: 'white' // Warna teks putih
                        }}
                    >
                        {editItem ? 'Edit Task' : 'Tambahkan'}
                    </button>
                </form>
            </div>
        );
    }
}