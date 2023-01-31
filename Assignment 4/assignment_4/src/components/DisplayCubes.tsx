import React from 'react';

interface Props {
  numbers: number[];
}

const DisplayCubes= ({ numbers } : Props) => {
  return (
    <div>
      <h2>Cube of Numbers:</h2>
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}^3 = {num * num * num}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayCubes;