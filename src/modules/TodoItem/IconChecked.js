import {BasamentIcon} from './BasamentIcon.js'

function CheckedIcon({completed , onCompleted}){
    return(
        <BasamentIcon type={'cheeked'} completed={completed} onClick={onCompleted}/>
       
    )
};
export {CheckedIcon}