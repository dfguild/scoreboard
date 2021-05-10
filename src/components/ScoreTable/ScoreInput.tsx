//import * as React from 'react';

interface scoreInputProps {
  scoreInput: string;
  onScoreInput: (score: string)=>void;
}


function ScoreInput(props: scoreInputProps): JSX.Element {
  return (
    <div>
      scoreInput {props}
    </div>
  );
}

export default ScoreInput;