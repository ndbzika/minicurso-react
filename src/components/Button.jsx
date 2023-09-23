import { useState } from 'react';

export const Button = () => {
  const [contador, setContador] = useState(0);

  const handleIncrementCount = () => {
    setContador(contador + 1);
  };

  return <button onClick={handleIncrementCount}>{contador} Likes</button>;
};
