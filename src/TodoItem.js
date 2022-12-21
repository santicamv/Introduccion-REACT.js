import react from "react";
import "./TodoItem.css"

function TodoItem(props){
    return(
        <div className="separador">
        <li className="lista">
            <p className="tareas">{props.text}</p>
        </li>
        </div>
    );
}

export { TodoItem };