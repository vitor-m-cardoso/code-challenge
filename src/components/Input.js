import React from 'react';

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={ id }>{ label }</label>
      <input
        type="number"
        id={ id }
        name={ id }
        onChange={({ target: { value } }) => setValue(value) }
      />
    </>
  );
};

export default Input;
