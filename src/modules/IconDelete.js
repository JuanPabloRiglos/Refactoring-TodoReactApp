import {BasamentIcon} from './BasamentIcons/index.js'
function DeleteIcon({completed , onDeleted}){
    return(
        <BasamentIcon type={'deleted'} onClick={onDeleted}/>
    )
}

export{DeleteIcon}