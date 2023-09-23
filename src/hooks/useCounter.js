import { useState } from 'react';

export default function useCounter(valorInicial = 0) {
  const [contador, setCount] = useState(valorInicial);

  const incrementar = () => setCount(contador + 1);
  const decrementar = () => setCount(contador - 1);

  return { contador, incrementar, decrementar };
}
