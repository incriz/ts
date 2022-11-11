import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
    id: string;
    title: string;
    completed: boolean;
}

type TodosState = {
    list: Todo[]
}

const initialState: TodosState = {
    list: []
}


const todoSlice = createSlice({
    name: "todos",
    initialState,

    reducers: {
        addTodo(state, action: PayloadAction<string>) {

            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            });
        },
        removeTodo(state, action: PayloadAction<string>){
            state.list = state.list.filter(todo => todo.id !== action.payload)
        },
        toggleTodoComplete(state, action: PayloadAction<string>) {
            const toggleTodo =state.list.find(todo => todo.id === action.payload)
            if(toggleTodo) toggleTodo.completed = !toggleTodo.completed;
        },
    },
});

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;