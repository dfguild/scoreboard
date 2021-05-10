//import * as React from 'react';
import Button from 'react-bootstrap/Button';

interface setupBarProps {
  onReset: ()=>void;
  onSetup: ()=>void;
}

function SetupBar(props: setupBarProps): JSX.Element {
  return (
    <div>
      <Button onClick={()=>props.onSetup()}>Setup</Button>
      <Button onClick={()=>props.onReset()}>Reset</Button>
    </div>
  );
}

export default SetupBar