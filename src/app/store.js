import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/TodoSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default configureStore ({
  reducer: {
    todos: todoReducer
  },
})
