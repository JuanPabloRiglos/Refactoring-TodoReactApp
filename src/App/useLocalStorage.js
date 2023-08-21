import React from "react";
//hook siempre arranca con "use"
// seteo de localStorage como un react hook 
function useLocalStorage(param , initialValue){
 
    const [item , setItem]= React.useState(initialValue);
   // si falla, poner esto en el React.usestate de arrba  itemsInLs;
   const [loading , setLoading] = React.useState(true);
   const [error , setError] = React.useState(false) 

    React.useEffect(()=>{ 
       setTimeout(()=>{
    try{ 
    let inLocalStorage = localStorage.getItem(param);
    let itemsInLs;
    if(! inLocalStorage){
      itemsInLs = [];
      localStorage.setItem(param , JSON.stringify(initialValue))
    } else{
      itemsInLs = JSON.parse(localStorage.getItem(param))
      setItem(itemsInLs)
    };
    console.log('esto de abajo es Ls')
    console.log(localStorage.getItem('toDos_v1'))
    console.log('esto de abajo es lsParseado')
    console.log(itemsInLs);
    setLoading(false)
  }catch(error){
    setLoading(false)
    setError(true)
  }
},2500)
}, []);
 
  //seteo Local Storage, tiene que estar sincronizado con el estado de React.
    function saveAll(newItem){
    const readyToLS = JSON.stringify(newItem);
    localStorage.setItem(param, readyToLS);
    setItem(newItem);
  };
  return {item , saveAll , loading , error};
  }

  export {useLocalStorage};