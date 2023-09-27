import P from 'prop-types';

export const Divisor = ({ comprimento = '90%' }) => {
  return (
    <hr
      style={{
        width: comprimento,
        backgroundColor: '#fff',
        boxShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.1)',
      }}
    />
  );
};

Divisor.propTypes = {
  comprimento: P.string,
};
