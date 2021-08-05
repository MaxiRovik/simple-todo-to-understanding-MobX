import React from 'react';
import {observer} from "mobx-react-lite";
import todo from "./store/todo";
import './App.css';

const Todo = observer(() => {

    return (
        <div>
            <button className="btn"
            onClick = {()=> todo.fetchTodos()}>more todos</button>
            {todo.todos.map(t=>
                <div className = "todo" key={t.id}>
                    <input type="checkbox"
                           checked ={t.completed}
                           onChange ={() => todo.completeTodo(t.id)}
                    />
                    {t.title}
                    <button className="del"
                    onClick ={()=> todo.removeTodo(t.id)}>
                        X
                    </button>
                </div>
            )}
        </div>
    )
    }
);
export default Todo