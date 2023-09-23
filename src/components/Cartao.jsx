import P from 'prop-types';

export function Cartao({ cabecalho, corpo }) {
  return (
    <div>
      <h2>{cabecalho}</h2>
      <p>{corpo}</p>
    </div>
  );
}

Cartao.propTypes = {
  cabecalho: P.string.isRequired,
  corpo: P.string.isRequired,
};
