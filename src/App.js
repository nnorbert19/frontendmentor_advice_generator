import React ,{useState,useEffect} from 'react';
import './App.scss';
import Advice from './component/Advice';

function App() {
  const [advice, setAdvice] = useState('');
  const [err, setErr] = useState('');

  const getAdvice = async () =>{
    console.log("belépett")
    try {
      const res = await fetch("https://api.adviceslip.com/advice",{
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
      if (!res.ok) {
        throw new Error(`Error! status: ${res.status}`);
      }
      const result = await res.json();
      console.log(advice);
      setAdvice(result);
    } catch (err) {
      setErr(err.message);
    } 
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      {err && <h2>{err}</h2>}
      {advice ? <Advice advice={advice} getAdvice={ getAdvice}/>: getAdvice}
    </div>
  );
}//
export default App;
