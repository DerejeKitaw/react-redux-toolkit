import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counters.module.css';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../../store/slices/counterSlice';

const Counters = (props) => {
  // const count = useSelector(selectCount);
  const count = 2;
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  return (
    <div className={classes.row}>
      <button className={classes.button}>+</button>
      <span className={classes.value}>{count}</span>
      <button className={classes.button}>-</button>
    </div>
  );
};


export default Counters;
