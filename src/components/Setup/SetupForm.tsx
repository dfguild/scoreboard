//import React from 'react';
import NameRow from './NameRow';
import AddNameRow from './AddNameRow';

interface setupFormProps {
  names: string[];
  onModifyNames: (names: string[])=>void; 
}

function SetupForm(props: setupFormProps): JSX.Element {

  function onAdd(name: string): void {
    props.onModifyNames([...props.names, name]);
  }

  function onDelete(i: number): void {
    props.onModifyNames(props.names.splice(i, 1));
  }

  console.log('SetupForm names=', props.names);
  return (
    <div>
      { props.names.map( (name, i) => {
        console.log('SetupForm name passed to NameRow of:', name);
        return (
          <NameRow
            key={name}
            name={name} 
            onDelete={() => onDelete(i)}
          />
        )
      })}
      <AddNameRow
        onAdd={onAdd}
      />
    </div>
  );
}

export default SetupForm;