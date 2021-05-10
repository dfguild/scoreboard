//import * as React, {useState} from 'react';

interface nameRowProps {
  name: string;
  onDelete: ()=>void; 
}

function NameRow(props: nameRowProps): JSX.Element {
  console.log('ExistingNameRow name=', props.name);
  return (
    <p>
      {props.name}
    </p>
  );
}

export default NameRow;