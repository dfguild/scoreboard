//import * as React from 'react';
import SetupBar from './SetupBar';
import SetupForm from './SetupForm';

interface setupProps {
  names: string[];
  onReset: ()=>void;
  onModifyNames: (names: string[])=>void;
}

function Setup(props: setupProps): JSX.Element {

  const onSetupClick = () => {
    return;
  }

  return (
    <div>
      <SetupBar 
        onReset={props.onReset}
        onSetup={onSetupClick}
      />
      <SetupForm 
        names={props.names}
        onModifyNames={props.onModifyNames}
      />
    </div>
  );
}

export default Setup;