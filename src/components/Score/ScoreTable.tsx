//import React from 'react';
import ScoreInput from './ScoreInput';

interface scoreTableProps {
  names: string[];
  scores: number[];
  scoreInput: string;
  onScoreInput: (score: string)=>void;
  onRedo: ()=>void;
}

function ScoreTable(props: scoreTableProps): JSX.Element {
  const players = props.names.length;
  const subtotals: number[] = new Array(players).fill(0);

  return (
    <div className="d-flex flex-row-wrap flex-wrap ScoreTable">
        {props.names.map(name=>
          <div className="ScoreTable-heading" key={name}>{name}</div>
        )}
        {props.scores.map((score, i) => {
          const playerNum = i % players;
          subtotals[playerNum] += score;
          return (
            <>
              <TableCell key={i} score={score} subtotal={subtotals[playerNum]}/>
            </>
          );
        })}
        <div className="InputCell">
          <div className="InputCellInput">
            <ScoreInput
              key={props.scores.length}
              scoreInput={props.scoreInput}
              onScoreInput={props.onScoreInput}
              onRedo={props.onRedo}
            />
          </div>
          <div className="InputCellBlankRow">
          </div>
        </div>
    </div>
  );
}

type tableCellProps = {
  score: number;
  subtotal: number;
}
function TableCell({score, subtotal}: tableCellProps): JSX.Element {
  return (
    <div className="TableCell">
      <div className="TableCellScore">
        {score}
      </div>
      <div className="TableCellSubtotal">
        {subtotal}
      </div>
    </div>
  );
}

export default ScoreTable;
