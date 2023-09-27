import P from 'prop-types';
import { Divisor } from './Divisor';

export const PersonagemItem = ({ nome = 'One Piece' }) => {
  return (
    <li style={{ color: '#fff' }}>
      {nome}
      <Divisor />
    </li>
  );
};

PersonagemItem.propTypes = {
  nome: P.string.isRequired,
};
