import React from "react";
//hook siempre arranca con "use"
// seteo de localStorage como un react hook 
function useLocalStorage(param , initialValue){
 
    const [item , setItem]= React.useState(initialValue);
   // si falla, poner esto en el React.usestate de arrba  itemsInLs;
   const [loading , setLoading] = React.useState(true);
   const [error , setError] = React.useState(false) 
   const [sincronizedItem , setSincronizedItem]= React.useState(true)

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

    setLoading(false)
    setSincronizedItem(true)
  }catch(error){
    setLoading(false)
    setError(true)
  }
},2500)
}, [sincronizedItem]);
 
  //seteo Local Storage, tiene que estar sincronizado con el estado de React.
    function saveAll(newItem){
    const readyToLS = JSON.stringify(newItem);
    localStorage.setItem(param, readyToLS);
    setItem(newItem);
  };

  // funcion para sncronizar estados cuando hay mas de una version de al app funcionando
  const sincronizeItem =() =>{
    setLoading(true);
    setSincronizedItem(false)
  }
  //RETURN
  return {item , saveAll , loading , error , sincronizeItem};
  }

  export {useLocalStorage};

//   const defaultTodos= [{text: 'hacerer la comidita', completed: true },{text:'comer la comidita', completed: false},{text: 'limpiar lo de la comidita', completed: false},{text: 'Digerir la comidita', completed: false},{text: 'Defecar la comidita', completed: true}, {text: 'Comer de nuevo', completed: false}];
// localStorage.setItem('toDos_v1', json.stringify(defaultTodos))