import { useState } from 'react';
import SetupHeader from './SetupHeader';
import SetupForm from './SetupForm';
import './Setup.css';

interface setupProps {
  names: string[];
  onReset: ()=>void;
  onModifyNames: (names: string[])=>void;
}

function Setup(props: setupProps): JSX.Element {

  const [openSetup, setOpenSetup] = useState(false);

  const onSetupClick = () => {
    console.log('Setup:onSetupClick setting openSetup to:', !openSetup);
    setOpenSetup(!openSetup);
  }

  return (
    <div className="setup">
      <SetupHeader 
        onReset={props.onReset}
        onSetup={onSetupClick}
      />
      { openSetup && <SetupForm 
          names={props.names}
          onModifyNames={props.onModifyNames}
        /> }
    </div>
  );
}

export default Setup;