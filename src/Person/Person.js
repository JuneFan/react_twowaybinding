import React from 'react';
import classes from './Person.css';

const person = (props) => {
  // const rnd = Math.random();
  // if(rnd > 0.8) {
  //   throw new Error('something went wrong');
  // }
  return(
    <div className = {classes.Person}>
      <h1 onClick={props.click}>I am {props.name} and I am {props.age} years old</h1>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  )
};

export default person;
