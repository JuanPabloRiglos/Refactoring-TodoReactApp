import {BasamentIcon} from './BasamentIcons/index.js'

function CheckedIcon({completed , onCompleted}){
    return(
        <BasamentIcon type={'cheeked'} completed={completed} onClick={onCompleted}/>
       
    )
};
export {CheckedIcon}