import {TodoCounter} from './modules/TodoCounter';
import {TodoSearch} from './modules/TodoSearch';
import {TodoList} from './modules/TodoList';
import {TodoItem} from './modules/TodoItem';
import {BtnCreate} from './modules/BtnCreate';
import './App.css';
import React from 'react'
//-- si se importa json, borrarlo


// const defaultTodos= [{text: 'hacerer la comidita', completed: true },{text:'comer la comidita', completed: false},{text: 'limpiar lo de la comidita', completed: false},{text: 'Digerir la comidita', completed: false},{text: 'Defecar la comidita', completed: true}, {text: 'Comer de nuevo', completed: false}];
// localStorage.setItem('toDos_v1', json.stringify(defaultTodos))


function App() { 
  let toDoInLs = localStorage.getItem('toDos_v1');
  if(! toDoInLs){
    toDoInLs = [];
    localStorage.setItem('toDos_v1',JSON.stringify([]))
  } else{
    toDoInLs = JSON.parse(localStorage.getItem('toDos_v1'))
  };
  console.log('esto de abajo es Ls')
  console.log(localStorage.getItem('toDos_v1'))
  console.log('esto de abajo es lsParseado')
  console.log(toDoInLs)

//seteo Local Storage, tiene que estar sincronizado con el estado de React.
  //-------------------------
  const [toDo , setToDo] = React.useState(toDoInLs);
  let completed = toDo.filter(todo => todo.completed);
  let completedCount = completed.length;
  let totalTodos = toDo.length;
  //impotante, setea el estado (React)
  //-------------------------
function saveAll(newArray){
  const readyToLS = JSON.stringify(newArray);
  localStorage.setItem('toDos_v1', readyToLS);
  setToDo(newArray)
};
  //-------------------------

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
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedCount} />
      <TodoSearch searchValue={searchValue}
      setSearchvalue={setSearchvalue}
       /> 

      <TodoList>
      {result.map(todos => (<TodoItem key={todos.text} text={todos.text} completed={todos.completed} onCompleted={()=> onCompleted(todos.text)} onDeleted={()=>onDeleted(todos.text)}/>))
   }
      </TodoList>

      <BtnCreate />
    </React.Fragment>
  );}
export default App;
