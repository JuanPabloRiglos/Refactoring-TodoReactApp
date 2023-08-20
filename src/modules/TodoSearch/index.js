
import './TodoSearch.css';
import React from 'react';

function TodoSearch({searchValue , setSearchvalue}){
   

    return(
        <input placeholder='Create your task'className="TodoSearch"
        onChange={(event)=>  {console.log('escribiste '); console.log(event.target.value) 
    setSearchvalue(event.target.value)}}/>
    )
};

export {TodoSearch}


