import { Cartao } from './components/Cartao';
import useCounter from './hooks/useCounter';

import './styles/global.css';

function App() {
  const { contador, incrementar } = useCounter(0);
  return (
    <main>
      <header className='menu'>
        <img src='/logo.png' alt='One Piece Logo' />
        <button className='like__button' onClick={incrementar}>
          {contador} Likes
        </button>
      </header>
      <section className='personagens'>
        <div id='conteudo-principal'>
          <Cartao
            foto='/luffy.png'
            nome='Monkey D. Luffy'
            funcao='Capitão do bando dos chpáeus de palha'
          />
          <Cartao
            foto='/zoro.png'
            nome='Roronoa Zoro'
            funcao='Espadachim do bando dos chpáeus de palha'
          />
          <Cartao
            foto='/nami.png'
            nome='Nami'
            funcao='Navegadora do bando dos chpáeus de palha'
          />
          <Cartao
            foto='/sanji.png'
            nome='Sanji'
            funcao='Cozinheiro do bando dos chpáeus de palha'
          />
          <Cartao
            foto='/usopp.jpg'
            nome='Usopp'
            funcao='Atirador do bando dos chpáeus de palha'
          />
          <Cartao
            foto='/chopper.png'
            nome='Tony Tony Chopper'
            funcao='Médico do bando dos chpáeus de palha'
          />
          <Cartao
            foto='/robin.png'
            nome='Nico Robin'
            funcao='Arqueóloga do bando dos chpáeus de palha'
          />
        </div>
      </section>
    </main>
  );
}

export default App;
