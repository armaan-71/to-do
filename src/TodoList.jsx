import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {

    





    return (
        <>
            <h1 className="header">To-do List</h1>
            <ul className="list">
              {todos.length === 0 && "No Todos"}
              {todos.map((todo) => { 
                return <TodoItem id={todo.id} completed={todo.completed} title={todo.title} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
              })}

            </ul> 
        </>
        
    )

}