//import {createRef} from 'react';
import ScoreInput from './ScoreInput';
import styled from 'styled-components';

interface scoreTableProps {
  names: string[];
  scores: number[];
  scoreInput: string;
  onScoreInput: (score: string)=>void;
  onRedo: ()=>void;
}

const Table = styled.div.attrs({
  className: "d-flex flex-row-wrap flex-wrap"
})`

`;

type AdditionalProps = {
  myWidth: string;
};

const Cell = styled.div<AdditionalProps>`
  width: ${props => props.myWidth};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  .subtotal {
      background: #a6b7c0;
      font-weight: bold;
      width: 100%;
  }
`;

const HeadingCell = styled(Cell)`
  background: #1d495e;
  color: white;
  font-weight: bold;
`;

const ScoreCell = styled(Cell)`
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  text-align: center;
`;

const InputCell = styled(ScoreCell)`
  .subtotal {
    height: 1.5rem;
  }
`;


function ScoreTable(props: scoreTableProps): JSX.Element {
  const players = props.names.length;
  const subtotals: number[] = new Array(players).fill(0);
  const myWidth = `${100 / players}%`;

  return (
    <Table>
        {props.names.map(name=>
          <HeadingCell myWidth={myWidth} className="mx-auto" key={name}>{name}</HeadingCell>
        )}
        {props.scores.map((score, i) => {
          const playerNum = i % players;
          subtotals[playerNum] += score;
          return (
            <>
              <TableCell key={i} score={score} subtotal={subtotals[playerNum]} myWidth={myWidth}/>
            </>
          );
        })}
        <InputCell myWidth={myWidth}>
          <div className="scoreinput">
            <ScoreInput
              key={props.scores.length}
              scoreInput={props.scoreInput}
              onScoreInput={props.onScoreInput}
              onRedo={props.onRedo}
            />
          </div>
          <div className="subtotal">
          </div>
        </InputCell>
    </Table>
  );
}

type tableCellProps = {
  score: number;
  subtotal: number;
  myWidth: string;
}
function TableCell({score, subtotal, myWidth}: tableCellProps): JSX.Element {
  return (
    <ScoreCell myWidth={myWidth}>
      <div className="score">
        {score}
      </div>
      <div className="subtotal">
        {subtotal}
      </div>
    </ScoreCell>
  );
}

export default ScoreTable;
