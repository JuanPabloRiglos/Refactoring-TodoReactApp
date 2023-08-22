import './EmptyState.css';
import React from 'react';

function EmptyState(){
   

    return(
        <li className='EmptyEstate-Li'
        >
        <p className='EmptyEstate-p'> No hay tareas guardadas, da click en el boton "➕" y guarda tu primer tarea!</p></li>
    
    )
};

export {EmptyState}

