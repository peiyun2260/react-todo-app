import { TodoItem } from "./TodoItem";

export function TodoList(props) {
    return (
        <ul className="list">
            {props.todos.length === 0 && "No Todos"}
            {props.todos.map(todo => {
                return (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onToggleTodo={props.onToggleTodo}
                        onDeleteTodo={props.onDeleteTodo}
                    />                    
                )
            })}
        </ul>
    )
}
