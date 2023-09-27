import { Button } from './components/Button';
import { Cartao } from './components/Cartao';

function App() {
  return (
    <>
      <Cartao
        foto='/luffy.png'
        nome='Monkey D. Luffy'
        funcao='Capitão do bando dos chapéus de palha'
      />
      <Button />
    </>
  );
}

export default App;
