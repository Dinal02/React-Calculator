import React, { useState } from 'react'
import './App.css'

const Calculation = () => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState(null)

    const calculate = (operation) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            setResult("Please Enter valid number");
            return
        }

        switch (operation) {
            case 'add':
                setResult(number1 + number2);
                break;

            case 'subtract':
                setResult(number1 - number2);
                break;

            case 'multiply':
                setResult(number1 * number2);
                break;

            case 'divide':
                if (number2 === 0) {
                    setResult("Cannot divide by zero");
                } else {
                    setResult(number1 / number2);
                }
                break;
            default: 
                setResult("Invalid Operation");
        }
    }
  return (
    <div className='calculator'>
        <h1>Calculator</h1>

        <div>
            <input 
                type="number"
                placeholder="Enter first number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
        </div>
        
        <div>
            <input 
                type="number"
                placeholder="Enter second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
        </div>

        <div className='buttons'>
            <button onClick={() => calculate('add')}>+</button>
            <button onClick={() => calculate('subtract')}>-</button>
            <button onClick={() => calculate('multiply')}>*</button>
            <button onClick={() => calculate('divide')}>/</button>
        </div>

        { result !== null &&  <div className='result'>Result: {result}</div>}

    </div>
  )
}

export default Calculation



