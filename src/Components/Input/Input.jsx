import React from 'react';
import './Input.scss';

const Input = (props) => {
  return (
    <div className={`form-group`}>
        <input {...props}/>
    </div>
  );
};

export default Input;
