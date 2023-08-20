import './BasamentIcon.css'
import {Check} from './Check'
import {Delete} from './Delete'

function BasamentIcon({type, completed , onClick }){
    const icons = {'cheeked':<Check />, 'deleted':<Delete />}
return(
    <span className={`Icon Icon-svgs `}
 onClick={onClick}
>  
    {icons[type]} 
    </span> 
) 
}

export {BasamentIcon}