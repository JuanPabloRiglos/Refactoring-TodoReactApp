import {TodoCounter} from '../modules/TodoCounter/index';
import {TodoSearch} from '../modules/TodoSearch/index';
import {TodoList} from '../modules/TodoList/index';
import {TodoItem} from '../modules/TodoItem/index';
import {BtnCreate} from '../modules/BtnCreate/index';
import {LoadingEstate} from '../modules/LoadingState'
import {ErrorState} from '../modules/ErrorState'
import {EmptyState} from '../modules/EmptyState'
import React from 'react';
import { Modal } from '../modules/modal';
import { ModalForm } from '../modules/ModalForm/';
import { TodoContext } from '../modules/TodoContext';

function AppStatelsUi(// {totalTodos, completedCount , searchValue , setSearchvalue , result , onCompleted , onDeleted , loading, error}
){

    const {loading , error , result , onDeleted , onCompleted , setOpoenModal, modalState }= React.useContext(TodoContext)
    return(
    <>
    <TodoCounter />
    <TodoSearch 
     /> 

   
<TodoList>
        {loading &&
         <LoadingEstate />}
        {error && < ErrorState />}
        { (! loading && !error && ! result[0])? <EmptyState /> : console.log(result) }

    {result.map(todos => (<TodoItem key={todos.text} text={todos.text} completed={todos.completed} onCompleted={()=> onCompleted(todos.text)} onDeleted={()=>onDeleted(todos.text)}/>))
 }
    </TodoList> 
 


    <BtnCreate 
    setOpoenModal={setOpoenModal} modalState={modalState}/>

    {modalState ?
         <Modal >
             <ModalForm /> 
        </Modal>  
         : console.log('cierra modal')
    }
    </>
    );
}

export {AppStatelsUi}