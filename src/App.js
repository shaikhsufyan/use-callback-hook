 
import Callback from './Components/Callback';
import { useCallback, useState } from 'react';

function App() {
  const [add, setAdd] = useState(0)
  const [minus,setMinus] = useState(100)
  

 const learn =  useCallback(()=>{
         
  },[])
  return (
     <>
      <Callback fun={learn} minus={minus} />
      <h1>{add}</h1>
      <button onClick={()=>{setAdd(add+1)}}>Add</button>
      <h1>{minus}</h1>
      <button onClick={()=>{setMinus(minus-1)}}>Minus</button>

     </>
  );
}

export default App;
