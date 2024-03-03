import  { useCallback } from 'react'
import useCounter from '../components/UseCounter';

function Counter() {
    const { increment, decrement, reset, setValue, count } = useCounter();
  
    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            setValue(event.target.newValue.value);
            event.target.newValue.value = "";
        },
        [setValue]
    );

    
    return (
        <div className="counter">
        <h1>{count}</h1>
       <div className='counter-button'>
       <button className='counter-btn_plus button-shadow' onClick={() => increment()}><img src="./images/plus.png" alt="plus" /></button>
       <button className='counter-btn_reset button-shadow' onClick={() => reset()}><img src="./images/reset.png"  alt="reset" /></button>
       <button className='counter-btn_minus button-shadow' onClick={() => decrement()}><img src="./images/minus.png" alt="minus"/></button>
       </div>
            <form onSubmit={handleSubmit}>
          <input className='new-value' name="newValue" type="tel" placeholder="New value" />
          <button className="btn-set-value">Set value</button>
          </form>
        </div>
    );
  }
export default Counter;
