
import { useLocalStorage } from './useLocalStorage';
import { AppStatelsUi } from './AppStatelsUi.js'; 
import './App.css';
import React from 'react'
//-- si se importa json automaticamente, borrarlo
function App() { 
  const { item : toDo , saveAll , loading , error} = useLocalStorage('toDos_v1', []);// le paso los parametros que necesita el useLocalStorage, esto remplaza al react.usestate pot un hook a mano
  let completed = toDo.filter(todo => todo.completed);
  let completedCount = completed.length;
  let totalTodos = toDo.length;

  const [searchValue , setSearchvalue] = React.useState('');
  console.log('escribiste ' + searchValue);
  //-------------------------

  //search.
  let serched = searchValue;
  const result = toDo.filter((todo) =>{ return todo.text.toLowerCase().includes(serched.toLowerCase())});
  console.log(result)
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

  return (
    <AppStatelsUi 
    
    totalTodos  ={totalTodos  }
    completedCount ={completedCount }
    searchValue ={searchValue }
    setSearchvalue ={setSearchvalue }
    result={result}
    onCompleted ={onCompleted }
     onDeleted={onDeleted}
    loading={loading}
    error={error}
    />
  );}
export default App;


// const defaultTodos= [{text: 'hacerer la comidita', completed: true },{text:'comer la comidita', completed: false},{text: 'limpiar lo de la comidita', completed: false},{text: 'Digerir la comidita', completed: false},{text: 'Defecar la comidita', completed: true}, {text: 'Comer de nuevo', completed: false}];
// localStorage.setItem('toDos_v1', json.stringify(defaultTodos))