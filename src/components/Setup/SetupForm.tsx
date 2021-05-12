//import React from 'react';
import NameRow from './NameRow';
import AddNameRow from './AddNameRow';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

interface setupFormProps {
  names: string[];
  onModifyNames: (names: string[], deleteIndex?: number)=>void; 
}

const StyledDiv = styled.div`
  width: 80%;
  margin: .5rem auto 0px auto;
`

function SetupForm(props: setupFormProps): JSX.Element {

  function onAdd(name: string): void {
    if (props.names.includes(name)) {
      alert(`Error ${name} exists, ignoring...`);
    } else {
      props.onModifyNames([...props.names, name]);
    }
  }

  function onDelete(i: number): void {
    console.log('SetupForm:OnDelete deleting index:', i, props.names[i]);
    const newNames = props.names.slice();
    newNames.splice(i,1);
    props.onModifyNames(newNames, i);
  }

  console.log('SetupForm names=', props.names);
  return (
    <StyledDiv>
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
    </StyledDiv>
  );
}

export default SetupForm;