import { useState } from 'react'

function App() {
  const [calc, setCalc] = useState("");
  const options = ['/', '*', '+', '-', '.']

  const updateCalc = (value : string) => {
    if((options.includes(value) && calc === "") || (options.includes(value) && options.includes(calc.slice(-1)))){
      return;
    }

    setCalc(calc + value)
  }

  const createDigits = () => {
    const myDigits  = [];
    for(let i = 1; i < 10; i++){
      myDigits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return myDigits
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }
  const deleteChar = () => {
    if(calc === ""){
      return;
    }
    const value : string = calc.slice(0, -1);
    setCalc(value);
  }

  return (
    <div className='App'>
      <div className='calculator'>
        <div className='display'>
          {calc || "0"}
        </div>
        <div className='operators'>
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={deleteChar}>CLEAR</button>
        </div>
        <div className='digits'>
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App                        