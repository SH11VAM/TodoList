import { createContext, useContext } from "react";

export const todoCreate = createContext({
  todos: [
    {
      id: 1,
      todo: "Say Hello",
      complete: "false",
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id,todo) => {},
  deleteTodo: (id) => {},
  toggleComplete :(id) =>{}
});

export const TodoProvider = todoCreate.Provider;

export  default function useTod(){
return useContext(todoCreate);
}
