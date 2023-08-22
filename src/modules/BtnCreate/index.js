import './CreateTodoBtn.css' 

function  BtnCreate({setOpoenModal, modalState}){
    console.log(modalState)
    return(
        <button className="CreateTodoButton"
        onClick={() => {setOpoenModal(state => ! state) ;console.log(modalState)}}>+</button>
    )
};

export {BtnCreate};