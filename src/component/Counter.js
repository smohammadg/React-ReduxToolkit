import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByValue } from '../Redux/counterSlice';

const Counter = () => {
    // const count = useSelector((store) => store.counter.count);
    const { count } = useSelector((store) => store.counter);
    const dispatch  = useDispatch();

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button className='button' onClick={() => 
                dispatch(increment())}>
                Increment </button>
            <button className='button' onClick={() => 
                dispatch(decrement())}>
                Decrement </button>
            <button className='button' onClick={() => 
                dispatch(incrementByValue(50))}>
                Increment By Value
            </button>
        </div>
    )
}
export default Counter;