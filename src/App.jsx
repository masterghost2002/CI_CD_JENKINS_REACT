import {useEffect, useState} from 'react';
import axios from 'axios';
function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    const getFromServer = async ()=>{
      const res = await axios.get('http://localhost:5000/');
      setCount(res.data.count);
      // console.log(data);
    }
    getFromServer();
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
