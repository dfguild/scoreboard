import {useEffect, useState} from 'react';
import Setup from './components/Setup/Setup';
import Score from './components/Score/Score';
import Container from 'react-bootstrap/Container';
import './App.css';

function App(): JSX.Element {

//  const [scores, setScores] = useState<number[]>([]);
  const [names, setNames] = useState<string[]>([]);
  const [scores, setScores] = useState<number[]>([]);
  useEffect(() => {
    const savedNames = localStorage.getItem('names');
    const savedScores = localStorage.getItem('scores');
    console.log('App:useEffect got savedNames, savedScores:', savedNames, savedScores);
    savedNames && setNames(JSON.parse(savedNames));
    savedScores && setScores(JSON.parse(savedScores));
  }, []);

  function onUndo(): void {
    const newScores = scores.slice(0, -1);
    setScores(newScores);
    saveScores(newScores);
  }

  function onUpdateScore(score: number): void {
    setScores([...scores, score]);
    saveScores([...scores, score]);
  }

  function onReset(): void {
    setScores([]);
    localStorage.removeItem('scores');
  }

  function onModifyNames(names: string[]): void {
    console.log('App:onModifyNames setNames to', names);
    localStorage.setItem('names', JSON.stringify(names));
    setNames([...names]);
  }

  return (
    <Container className="AppContainer">
      <Setup
        names={names}
        onReset={onReset}
        onModifyNames={onModifyNames}
      />
      <Score
        names={names}
        scores={scores}
        onUpdateScore={onUpdateScore}
        onUndo={onUndo}
      />
    </Container>
  );
}

function saveScores(names: number[]): void {
  localStorage.setItem('scores', JSON.stringify(names));
}

export default App;
