import React from 'react';
import './TodoCounter.css';


function TodoCounter({completedCount , totalTodos , loading}) {
  // const { totalTodos :total  ,
  //   completedCount:completed} = React.useContext(TodoContext) Fuera en refactoreo
  return (
    <h1 className={`TodoCounter ${!!loading && 'TodoCounter--onLoading'}`}>
      Has completado <span>{completedCount}</span> de <span>{totalTodos}</span> Tareas
    </h1>
  );
}

 export {TodoCounter};       
