import { VscTrash } from "react-icons/vsc";

export function TodoItem(props) {
    <li key={props.id}>
        <label>
            <input type="checkbox" checked={props.completed} onChange={e => props.onToggleTodo(props.od, e.target.checked)}/>
            {props.title}
        </label>
        <button onClick={() => props.onDeleteTodo(props.id)} className="trash-icon"><VscTrash /></button>
    </li>
}