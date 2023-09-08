
import React from 'react'
import { useTodos } from './UseTodos';
import {TodoHeader} from '../modules/TodoHeader/index';
import {TodoCounter} from '../modules/TodoCounter/index';
import {TodoSearch} from '../modules/TodoSearch/index';
import {TodoList} from '../modules/TodoList/index';
import {TodoItem} from '../modules/TodoItem/index';
import {BtnCreate} from '../modules/BtnCreate/index';
import {LoadingEstate} from '../modules/LoadingState'
import {ErrorState} from '../modules/ErrorState'
import {EmptyState} from '../modules/EmptyState'
import { Modal } from '../modules/modal';
import { ModalForm } from '../modules/ModalForm/';
import { ChangeAlertWhitStorageListener } from '../modules/ChangeAlert/Index';
import './App.css';

function App() { 
  
  const {loading , error , result , onDeleted , onCompleted , setOpoenModal, modalState, completedCount , totalTodos , searchValue, setSearchvalue, addTodo , sincronizeTodo}= useTodos()
 
  return(
    <>
    <TodoHeader  loading={loading}>
    
    <TodoCounter 
    completedCount={completedCount}
    totalTodos={totalTodos}
    />

    <TodoSearch 
    setSearchvalue={setSearchvalue}
     /> 
    </TodoHeader>

   
      <TodoList
      error={error}
      loading={loading}
      result={result}
      totalTodos={totalTodos}
      serchText={searchValue}
      //render props - props, dentro de una funcion declarada al efecto
      onError={()=> <ErrorState/>}
      onLoading={()=> <LoadingEstate/>}
      onEmptyTodo={()=>  <EmptyState />}
      onEmptySearchResult ={(serchText)=>
        <p>No hay resultados para tu busqueda de {serchText}</p>
      }
      render={todos =>(<TodoItem key={todos.text} text={todos.text} completed={todos.completed} onCompleted={()=> onCompleted(todos.text)} onDeleted={()=>onDeleted(todos.text)}/>)}
      />

    <BtnCreate 
    setOpoenModal={setOpoenModal} modalState={modalState}/>

    {modalState ?
         <Modal >
             <ModalForm 
             addTodo={addTodo} 
             setOpoenModal={setOpoenModal}/> 
        </Modal>  
         : console.log('cierra modal')
    }
    <ChangeAlertWhitStorageListener 
    sincronize={sincronizeTodo}/>
    </>
    )

}
export default App;


