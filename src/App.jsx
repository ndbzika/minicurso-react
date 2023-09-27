import { Button } from './components/Button';
import { Cartao } from './components/Cartao';
import { PersonagemItem } from './components/PersonagemItem';

function App() {
  return (
    <>
      <Cartao
        foto='/luffy.png'
        nome='Monkey D. Luffy'
        funcao='Capitão do bando dos chapéus de palha'
      />
      <Button />
      <ul>
        <PersonagemItem nome='Monkey D. Luffy' />
        <PersonagemItem nome='Roronoa Zoro' />
        <PersonagemItem nome='Nami' />
        <PersonagemItem nome='Usopp' />
        <PersonagemItem nome='Sanji' />
        <PersonagemItem nome='Tony Tony Chopper' />
        <PersonagemItem nome='Nico Robin' />
      </ul>
    </>
  );
}

export default App;
