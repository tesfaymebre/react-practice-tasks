import React,{useState} from "react";

function TodoItem(props){

    return (
        <li onClick={() => props.deleteItem(props.id)}>{props.item}</li>
    );
}

export default TodoItem;