//import * as React from 'react';
import FormControl from 'react-bootstrap/FormControl';

interface scoreInputProps {
  scoreInput: string;
  onScoreInput: (score: string)=>void;
  onRedo: ()=>void;
}


function ScoreInput(props: scoreInputProps): JSX.Element {
  return (
    <>
      <FormControl
        size="sm"
        value={props.scoreInput}
        onChange={(e)=>props.onScoreInput(e.target.value)}
        onKeyPress={(event: React.KeyboardEvent) => {
          if (event.key === "Enter" && props.scoreInput != '') {
            console.log('ScoreInput in KeyPress event with enter -- call onRedo')
            props.onRedo();
          }
        }}
      />
    </>
  );
}

export default ScoreInput;