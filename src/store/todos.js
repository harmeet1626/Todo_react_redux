import { createSlice } from "@reduxjs/toolkit";
const todos = createSlice({
    name: 'Todos',
    initialState: { value: [{ todo: 'Walk', done: false }] },
    reducers: {
        addTodo: (state, action) => {
            state.value.push({ id: state.value.length + 1, todo: action.payload, done: false })
            console.log(action.payload, "test   ", state.value)
        },
        deleteTodo: (state, action) => {
            state.value.splice(action.payload, 1)
        },
        completed:(state, action) =>{
            state.value[action.payload].done = !state.value[action.payload].done
        }
    }
})

export const { addTodo, deleteTodo, completed } = todos.actions;

export default todos.reducer;