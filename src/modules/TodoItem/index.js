import './TodoItem.css';
import {CheckedIcon} from '../IconChecked';
import {DeleteIcon} from '../IconDelete'
import React from 'react';
function TodoItem(props){
    // {text, completed} =========>> tambuen puedo destructurar las props
    return(
        <li className='TodoItem'>
            <CheckedIcon completed={props.completed}  onCompleted={props.onCompleted}/>
            {/* <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
           onClick={props.onCompleted} > ✅</span> */}
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`} >{props.text}</p>
            <DeleteIcon completed={props.completed} onDeleted={props.onDeleted} />
            {/* <span  onClick={props.onDeleted} >✖️</span> */}

        </li>
    )
};

export {TodoItem};