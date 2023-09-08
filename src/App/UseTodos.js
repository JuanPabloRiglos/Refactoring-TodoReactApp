import React from 'react';
import { useLocalStorage } from './useLocalStorage';



 function useTodos(){
  // en refactoreo, elmine el uso de R.Context, y la funcion todoProvider, en su lugar la convertimos en el HOOK useTodo

    const { item : toDo , saveAll , sincronizeItem : sincronizeTodo , loading , error} = useLocalStorage('toDos_v1', []);// le paso los parametros que necesita el useLocalStorage, esto remplaza al react.usestate pot un hook a mano
  let completed = toDo.filter(todo => todo.completed);
  let completedCount = completed.length;
  let totalTodos = toDo.length;

  const [searchValue , setSearchvalue] = React.useState('');
  console.log('escribiste ' + searchValue);
  //-------------------------
  const [modalState , setOpoenModal] = React.useState(false);
  console.log(modalState)
    // const [modalState, setOpoenModal] = React.useState(false);
    //-----------------------
  //search.
  let serched = searchValue;
  const result = toDo.filter((todo) =>{ return todo.text.toLowerCase().includes(serched.toLowerCase())});
  console.log(result)

  //---------
  // Add new ToDo
  function addTodo(recibedText){
    const toDosInLs= [...toDo];
     (toDosInLs)? toDosInLs[toDosInLs.length] = {text:recibedText , completed:false}: toDosInLs[0] = {text:recibedText , completed:false};
    saveAll(toDosInLs)
  }
  //--------- 
  //update or Delete toDo
  function onCompleted(text){
const newToDos = [...toDo];
const indexToCut = newToDos.findIndex(todo => todo.text === text);
newToDos[indexToCut].completed = true;
saveAll(newToDos)
  }
//deleted 
function onDeleted(text){
  const newToDos = [...toDo];
  const indexToCut = newToDos.findIndex(todo => todo.text === text);
  newToDos.splice(indexToCut, 1);
  saveAll(newToDos)
    }

   


    return(
        {
             totalTodos  ,
            completedCount ,
            searchValue ,
            setSearchvalue ,
            result,
            onCompleted ,
             onDeleted,
            loading,
            error, 
            setOpoenModal,
            modalState, 
            addTodo,
             sincronizeTodo
            }
    )
 }

 export { useTodos}