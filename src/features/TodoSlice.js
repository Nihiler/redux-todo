import { createSlice } from '@reduxjs/toolkit'
//const [todoList, setTodoList] = useState([])


const initialState = {
    todoList: []

}

const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action)=>{
            state.todoList.push(action.payload)
        }
    }
});

export const { saveTodo } = TodoSlice.actions
export default TodoSlice.reducer

