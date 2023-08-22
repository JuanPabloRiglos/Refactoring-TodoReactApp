import {React}  from "react";
import ReactDOM from 'react-dom'
import './Modal.css'

// import ReactDOM from 'react-dom';

function Modal({ children }){
    return ReactDOM.createPortal(
        <div className="modal-Content-Styles"> 
           {children} 
        </div>,
        document.getElementById('modal') // este segundo parametro es a donde apunta el portal de createPortal
    )

}

export {Modal}