import useCounter from '../hooks/useCounter';

export const Button = () => {
  const { contador, incrementar } = useCounter(0);

  return <button onClick={incrementar}>{contador} Likes</button>;
};
