import P from 'prop-types';
import '../styles/cartao.css';
export function Cartao({ foto, nome, funcao }) {
  return (
    <div className='cartao'>
      <img src={foto} alt={foto} />
      <h2 className='cartao__nome'>{nome}</h2>
      <p className='cartaoFuncao'>{funcao}</p>
    </div>
  );
}

Cartao.propTypes = {
  foto: P.string.isRequired,
  nome: P.string.isRequired,
  funcao: P.string.isRequired,
};
