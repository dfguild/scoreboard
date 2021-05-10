import * as React from 'react';
import ScoreInput from './ScoreInput';
import UndoRedo from './UndoRedo';

interface scoreTableProps {
  names: string[];
  onUndo: ()=>void;
  onRedo: ()=>void;
  scores: number[];
  onUpdateScore: (score: number)=>void;
}

function ScoreTable(props: scoreTableProps): JSX.Element {
  const [input, setInput] = React.useState('');

  function onRedo(): void {
    if (input != '') {
      props.onUpdateScore(Number(input));
    } else {
      props.onRedo();
    }
  }

  return (
    <div>
      ScoreTable {props}
      <ScoreInput scoreInput={input} onScoreInput={setInput} />
      <UndoRedo onUndo={props.onUndo} onRedo={onRedo} />
    </div>
  );
}

export default ScoreTable;