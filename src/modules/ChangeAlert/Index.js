import React from "react";
import {whitSotargeListener} from './whitStorageListener'

function ChangeAlert ({show , toggleShow}){
    if(show){
    return (
        <div>
        <p>Hubo cambios ?</p>
        <button 
        onClick={()=>toggleShow(false)}
        >
            Refresh Data</button>
        </div>
    )} else{
        return null
    }
}
const ChangeAlertWhitStorageListener = whitSotargeListener(ChangeAlert)

export { ChangeAlertWhitStorageListener}