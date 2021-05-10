import {useState} from 'react';
import Setup from './components/Setup/Setup';
//import ScoreTable from './components/ScoreTable';
import './App.css';

function App(): JSX.Element {

//  const [scores, setScores] = useState<number[]>([]);
  const [names, setNames] = useState<string[]>([]);

/*
  function onUndo(): void {
    return;
  }

  function onRedo(): void {
    return;
  }

  function onUpdateScore(score: number): void {
    setScores([...scores, score]);
  }
*/
  function onReset(): void {
    //setScores([]);
  }

  function onModifyNames(names: string[]): void {
    console.log('App:onModifyNames setNames to', names);
    setNames([...names]);
  }

  return (
    <div className="App">
      <Setup
        names={names}
        onReset={onReset}
        onModifyNames={onModifyNames}
      />
{/*}      <ScoreTable
        names={names}
        scores={scores}
        onUpdateScore={onUpdateScore}
        onUndo={onUndo}
        onRedo={onRedo}
  /> */}
    </div>
  );
}

export default App;
