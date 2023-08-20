import {TodoCounter} from './modules/TodoCounter';
import {TodoSearch} from './modules/TodoSearch';
import {TodoList} from './modules/TodoList';
import {TodoItem} from './modules/TodoItem';
import {BtnCreate} from './modules/BtnCreate';
import './App.css';
import React from 'react'
//-- si se importa json automaticamente, borrarlo

// seteo de localStorage como un react hook 

//hook siempre arranca con "use"

function useLocalStorage(param , initialValue){
  let inLocalStorage = localStorage.getItem(param);
  let itemsInLs;
  if(! inLocalStorage){
    itemsInLs = [];
    localStorage.setItem(param , JSON.stringify(initialValue))
  } else{
    itemsInLs = JSON.parse(localStorage.getItem(param))
  };
  console.log('esto de abajo es Ls')
  console.log(localStorage.getItem('toDos_v1'))
  console.log('esto de abajo es lsParseado')
  console.log(itemsInLs);

  const [item , setItem]= React.useState(itemsInLs)
//seteo Local Storage, tiene que estar sincronizado con el estado de React.
  function saveAll(newItem){
  const readyToLS = JSON.stringify(newItem);
  localStorage.setItem(param, readyToLS);
  setItem(newItem);
};
return [item , saveAll];
}



function App() { 
  const [toDo , saveAll] = useLocalStorage('toDos_v1', []);// le paso los parametros que necesita el useLocalStorage, esto remplaza al react.usestate pot un hook a mano
  let completed = toDo.filter(todo => todo.completed);
  let completedCount = completed.length;
  let totalTodos = toDo.length;
  //impotante, setea el estado (React)
  //-------------------------

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


// const defaultTodos= [{text: 'hacerer la comidita', completed: true },{text:'comer la comidita', completed: false},{text: 'limpiar lo de la comidita', completed: false},{text: 'Digerir la comidita', completed: false},{text: 'Defecar la comidita', completed: true}, {text: 'Comer de nuevo', completed: false}];
// localStorage.setItem('toDos_v1', json.stringify(defaultTodos))