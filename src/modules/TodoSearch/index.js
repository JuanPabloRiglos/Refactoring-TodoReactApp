

import './TodoSearch.css';
import React from 'react';

function TodoSearch({setSearchvalue , loading}){
//    {searchValue , setSearchvalue}
// const {  setSearchvalue} = React.useContext(TodoContext) FUERA EN REFACTOREO-
    return(
        <input placeholder='Create your task'className="TodoSearch"
        disabled={loading}
        onChange={(event)=>  {
    setSearchvalue(event.target.value)}}/>
    )
};

export {TodoSearch}


