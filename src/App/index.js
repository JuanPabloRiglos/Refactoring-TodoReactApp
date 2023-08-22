
import { AppStatelsUi } from './AppStatelsUi.js'; 
import './App.css';
import React from 'react'
import { TodoProvider } from '../modules/TodoContext/index.js';
function App() { 
  
  return (
   <TodoProvider>
    <AppStatelsUi />
   </TodoProvider>
   
  )}
export default App;


