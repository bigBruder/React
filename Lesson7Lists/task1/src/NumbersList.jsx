import React from 'react';

const NumbersList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map(number => (
        <li>{number}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
