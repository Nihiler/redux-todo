import React from 'react'
import "./TodoItem.css"

const TodoItem = (name, done, id) => {
    return (
        <div>
            <div className='todoItem'>
                {/* checbox */}
                {/* name */}
                <p>{name}</p>
             </div>
        </div>
    )
}

export default TodoItem
