import {BasamentIcon} from './BasamentIcons.js'
function DeleteIcon({completed , onDeleted}){
    return(
        <BasamentIcon type={'deleted'} onClick={onDeleted}/>
    )
}

export{DeleteIcon}