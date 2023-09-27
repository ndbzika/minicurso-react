import { Cartao } from './components/Cartao';
import { Divisor } from './components/Divisor';
import { PersonagemItem } from './components/PersonagemItem';
import useCounter from './hooks/useCounter';

import './styles/global.css';

function App() {
  const { contador, incrementar } = useCounter(0);
  return (
    <main>
      <div className='menu__lateral'>
        <img src='/logo.png' alt='One Piece Logo' />
        <Divisor />
        <ul>
          <PersonagemItem nome='Monkey D. Luffy' />
          <PersonagemItem nome='Roronoa Zoro' />
          <PersonagemItem nome='Nami' />
          <PersonagemItem nome='Usopp' />
          <PersonagemItem nome='Sanji' />
          <PersonagemItem nome='Tony Tony Chopper' />
          <PersonagemItem nome='Nico Robin' />
        </ul>
        <button onClick={incrementar} className='like__button'>
          {contador} Likes
        </button>
      </div>
      <div id='content'>
        <Cartao
          foto='/luffy.png'
          nome='Monkey D. Luffy'
          funcao='Capitão do bando dos chapéus de palha'
        />
      </div>
    </main>
  );
}

export default App;
