import './CreateTodoBtn.css' 
function  BtnCreate(){
    return(
        <button className="CreateTodoButton"
        onClick={() => {console.log('creaste una tarea')}}>+</button>
    )
};

export {BtnCreate};