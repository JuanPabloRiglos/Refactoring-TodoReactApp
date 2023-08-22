import React from "react";
import './ModalForm.css' ;
import { TodoContext } from "../TodoContext";


function ModalForm(){
const {addTodo , setOpoenModal} = React.useContext(TodoContext)

    const [newToDoValue , setNewTodoValue] = React.useState('')

    const onSubmit=(event)=>{
        event.preventDefault();
        addTodo(newToDoValue);
        setOpoenModal(false);
    }

    const getterValue =(event)=>{
        setNewTodoValue(event.target.value)
    };
    const onCancel =(event)=> {
        setOpoenModal(false)
    }
    return(
        <form onSubmit={onSubmit}>
            <label> Escribe aqui tu nuevo To do!</label>
            <textarea placeholder=" Terminar de guardar tu nueva tarea!"
            value={newToDoValue}
            onChange={getterValue}
            />
            <div className="ModalForm-buttonContainer">
            <button className="ModalForm-button ModalForm-button--cancel" type="button" onClick={onCancel}>Cancelar</button>
            <button className="ModalForm-button ModalForm-button--add" type="submit">Guardar !</button></div>
        </form>
    )
}
export {ModalForm}
