//import React from 'react';
import NameRow from './NameRow';
import AddNameRow from './AddNameRow';
import Form from 'react-bootstrap/Form';

interface setupFormProps {
  names: string[];
  onModifyNames: (names: string[])=>void; 
}

function SetupForm(props: setupFormProps): JSX.Element {

  function onAdd(name: string): void {
    props.onModifyNames([...props.names, name]);
  }

  function onDelete(i: number): void {
    console.log('SetupForm:OnDelete deleting index:', i, props.names[i]);
    const newNames = props.names.slice();
    newNames.splice(i,1);
    props.onModifyNames(newNames);
  }

  console.log('SetupForm names=', props.names);
  return (
    <Form>
      <Form.Group>
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
      </Form.Group>
    </Form>
  );
}

export default SetupForm;