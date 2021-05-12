import * as React from 'react';
import ScoreTable from './ScoreTable';
import UndoRedo from './UndoRedo';

interface scoreTableProps {
  names: string[];
  onUndo: ()=>void;
  scores: number[];
  onUpdateScore: (score: number)=>void;
}

function Score(props: scoreTableProps): JSX.Element {
  const [input, setInput] = React.useState('');

  function onRedo(): void {
    console.log('Score:onRedo with input:', input);
    if (input != '') {
      props.onUpdateScore(Number(input));
      setInput('');
    }
  }

  return (
    <div className="Score">
      <ScoreTable
        names={props.names}
        scores={props.scores}
        scoreInput={input}
        onScoreInput={(score:string) => setInput(score)}
        onRedo={onRedo}
      />
      <UndoRedo onUndo={props.onUndo} onRedo={onRedo} />
    </div>
  );
}

export default Score;