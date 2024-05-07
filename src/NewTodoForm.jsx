import { useState } from 'react';

export function NewTodoForm(props) {
    const [newItem, setNewItem] = useState('');
    function deleteAll() {
        props.onDeleteAll()
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        props.onSubmit(newItem)
        setNewItem('')
    }
    return ( 
        <form className="new-item-form">
            <input className="new-item" value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
            <button className="item-btn" onCLick={handleSubmit}>Add</button>
            <button className="item-btn" onClick={deleteAll} >Delete All</button>
        </form>
    )
}