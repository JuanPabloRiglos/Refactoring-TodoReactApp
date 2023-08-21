import {TodoCounter} from '../modules/TodoCounter/index';
import {TodoSearch} from '../modules/TodoSearch/index';
import {TodoList} from '../modules/TodoList/index';
import {TodoItem} from '../modules/TodoItem/index';
import {BtnCreate} from '../modules/BtnCreate/index';
import {LoadingEstate} from '../modules/LoadingState'
import {ErrorState} from '../modules/ErrorState'
import {EmptyState} from '../modules/EmptyState'
import React from 'react';

function AppStatelsUi({totalTodos, completedCount , searchValue , setSearchvalue , result , onCompleted , onDeleted , loading, error}){
    return(
    <>
    <TodoCounter total={totalTodos} completed={completedCount} />
    <TodoSearch searchValue={searchValue}
    setSearchvalue={setSearchvalue}
     /> 

    <TodoList>

        {loading && <LoadingEstate />}
        {error && < ErrorState />}
        { (! loading && !error && ! result[0])? <EmptyState /> : console.log(result) }

    {result.map(todos => (<TodoItem key={todos.text} text={todos.text} completed={todos.completed} onCompleted={()=> onCompleted(todos.text)} onDeleted={()=>onDeleted(todos.text)}/>))
 }
    </TodoList>
    <BtnCreate />
    </>
    )
}

export {AppStatelsUi}