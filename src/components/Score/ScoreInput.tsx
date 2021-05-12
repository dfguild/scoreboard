//import React, {forwardRef} from 'react';
//import FormControl from 'react-bootstrap/FormControl';
import styled from 'styled-components';

const StyledInput = styled.input`
  max-width: 80px;
  height: 1.5rem;
  margin: 0px auto;
  text-align: center;
`;


interface scoreInputProps {
  scoreInput: string;
  onScoreInput: (score: string)=>void;
  onRedo: ()=>void;
}

export type Ref = HTMLInputElement;

function ScoreInput(props: scoreInputProps): JSX.Element  {
  return (
    <>
      <StyledInput
        type="text"
        autoFocus
        value={props.scoreInput}
        onChange={(e: React.BaseSyntheticEvent)=>props.onScoreInput(e.target.value)}
        onKeyPress={(event: React.KeyboardEvent) => {
          if ((event.key === "Enter" || event.key === "Tab") && props.scoreInput != '') {
            console.log('ScoreInput in KeyPress event with enter -- call onRedo')
            props.onRedo();
          }
        }}
      />
    </>
  );
}

export default ScoreInput;