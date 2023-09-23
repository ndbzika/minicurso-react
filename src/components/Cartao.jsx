import P from 'prop-types';

export function Cartao(props) {
  return (
    <div>
      <h2>{props.cabecalho}</h2>
      <p>{props.corpo}</p>
    </div>
  );
}

Cartao.propTypes = {
  cabecalho: P.string.isRequired,
  corpo: P.string.isRequired,
};
