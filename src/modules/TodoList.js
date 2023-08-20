import './TodoList.css'

function TodoList(porps){
 return(
    <ul className="TodoList">
        {porps.children}
    </ul>)
};

export {TodoList} ;