import React from 'react';
import { useState } from 'react';

export default function TodosList({item, onUpdate, onDelete}) {

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit() {
        
        const [newValue, setNewValue] = useState(item.title);
        
        function handleSubmit(e) {
            e.preventDefault();
        }

        function handleChange(e) {
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClickUpdate() {
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return  <form className='form-edit' onSubmit={handleSubmit}>
                    <input type="text" className='todo-input' onChange={handleChange} value={newValue}/>
                    <button className='btn-update' onClick={handleClickUpdate}>Update</button>
                </form>
    };

    function TodoElement() {
        return  <div className='todo-element'>
                    {item.title}

                    <button className='btn-edit' onClick={() => setIsEdit(true)}> Edit </button>
                    <button className='btn-delete' onClick={(e) => onDelete(item.id)}> Delete </button>
                </div>
    }

    return (
        <div className='todos-list'>
            {isEdit ? <FormEdit /> : <TodoElement />}
        </div>
    );
}