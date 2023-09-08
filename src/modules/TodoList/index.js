import './TodoList.css'

function TodoList(props){
 return(

    <section className='TodoList-container'>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.totalTodos) && props.onEmptyTodo()}
        {(!!props.totalTodos && !props.result.length) && props.onEmptySearchResult(props.serchText)}

        {(!props.loading && !props.error) && props.result.map(todos => props.render(todos)) }
     <ul className="TodoList">
        {props.children}
    </ul>
    </section>


  
 )
};

export {TodoList} ;