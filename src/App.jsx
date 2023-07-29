import {useEffect, useState} from 'react';
import axios from 'axios';
function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    const setRandomCount = ()=>{
      const random = Math.floor((Math.random()*999+1000));
      setCount(random);
    }
    setRandomCount(random);
  }, [])
  const cssStyle = {
    width:'100vw',
    height:'100vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }
  return (
    <div style={cssStyle}>
      Random Count from server: {count}
    </div>
  )
}

export default App
