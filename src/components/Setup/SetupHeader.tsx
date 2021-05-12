//import * as React from 'react';
import Button from 'react-bootstrap/Button';

interface setupBarProps {
  onReset: ()=>void;
  onSetup: ()=>void;
}

function SetupHeader(props: setupBarProps): JSX.Element {
  return (
    <div className="d-flex flex-row justify-content-around my-2 Setup-header">
      <Button size="sm" onClick={props.onSetup}>Setup</Button>
      <Button size="sm" onClick={props.onReset}>Reset</Button>
    </div>
  );
}

export default SetupHeader;