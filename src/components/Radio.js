import React from 'react';

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      { options.map((option) => (
        <label key={ option }>
          <input
            type="radio"
            value={ option }
            checked={ value === option }
            onChange={ ({ target: { value } }) => setValue(value) }
            { ...props }
          />
        </label>
      )) }
    </>
  );
};

export default Radio;
