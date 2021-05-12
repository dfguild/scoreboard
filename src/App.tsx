import {useEffect, useState} from 'react';
import AppHeader from './components/AppHeader';
import SetupForm from './components/Setup/SetupForm';
import Score from './components/Score/Score';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 10px auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  .score {
    width: 100%;
  }
`;


function App(): JSX.Element {

//  const [scores, setScores] = useState<number[]>([]);
  const [names, setNames] = useState<string[]>([]);
  const [scores, setScores] = useState<number[]>([]);
  const [openSetup, setOpenSetup] = useState(false);

  useEffect(() => {
    const savedNames = localStorage.getItem('names');
    const savedScores = localStorage.getItem('scores');
    console.log('App:useEffect got savedNames, savedScores:', savedNames, savedScores);
    savedNames && setNames(JSON.parse(savedNames));
    savedScores && setScores(JSON.parse(savedScores));
    savedNames || setOpenSetup(true);
  }, []);

  function saveScores(newScores: number[]): void {
    setScores(newScores)
    localStorage.setItem('scores', JSON.stringify(newScores));
  }

  function onUndo(): void {
    const newScores = scores.slice(0, -1);
    saveScores(newScores);
  }

  function onUpdateScore(score: number): void {
    saveScores([...scores, score]);
  }

  function onReset(): void {
    setScores([]);
    localStorage.removeItem('scores');
  }

  function onModifyNames(newNames: string[], deleteIndex?: number): void {
    console.log('App:onModifyNames setNames to', newNames);
    localStorage.setItem('names', JSON.stringify(newNames));
    if (deleteIndex && deleteIndex < scores.length ) saveScores(deletePlayer(deleteIndex, names.length, scores));
    if ( names.length === newNames.length - 1 && scores.length > names.length) saveScores(addPlayer(newNames.length, scores));
    setNames([...newNames]);
  }

  return (
    <Container>
      <AppHeader
        onReset={onReset}
        onSetup={()=>setOpenSetup(!openSetup)}
      />
      { openSetup && <SetupForm 
          names={names}
          onModifyNames={onModifyNames}
        /> }
      <Score
        names={names}
        scores={scores}
        onUpdateScore={onUpdateScore}
        onUndo={onUndo}
      />
    </Container>
  );
}

function deletePlayer(index: number, players: number, scores: number[]): number[] {
  console.log('App:deletePlayers deleting scores for player:', index);
  return scores.filter((_ , i) => ((i) % (players) !== index));
}

function addPlayer(newPlayerNum: number, scores: number[]): number[] {
  const oldPlayerNum = newPlayerNum - 1;
  const roundsCompleted = Math.floor(scores.length / oldPlayerNum);
  const newScores = scores.slice();
  for ( let i = roundsCompleted; i > 0; i--) {
    if ( i * oldPlayerNum === scores.length ) continue;
    newScores.splice( i * ( oldPlayerNum ), 0, 0);
  }
  console.log('App:addPlayer returning:', newScores);
  return newScores;
}

export default App;
